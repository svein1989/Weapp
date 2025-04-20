// 初始化云数据库
const db = wx.cloud.database()

// 修改默认图片路径
const defaultLogo = 'https://img.yzcdn.cn/vant/logo.png'  // 临时使用在线图片
const defaultEmpty = 'https://img.yzcdn.cn/vant/empty-image-default.png'

Page({
  data: {
    regions: [],
    schools: [],
    currentRegion: null,
    searchValue: '',
    pageSize: 20,
    currentPage: 1,
    hasMore: true,
    isRefreshing: false,
    loading: true,
    error: null,
    filteredSchools: [],
    showFiltered: false
  },

  onLoad() {
    this.loadData()
  },

  // 加载所有数据
  async loadData() {
    try {
      this.setData({ loading: true })
      
      // 获取地区数据
      const regionsRes = await db.collection('schools')
        .where({
          regions: db.command.exists(true)
        })
        .field({
          regions: true
        })
        .get()
      
      if (regionsRes.data && regionsRes.data.length > 0) {
        const sortedRegions = regionsRes.data[0].regions.sort((a, b) => a.priority - b.priority)
        this.setData({ regions: sortedRegions })
      }

      // 获取学校数据
      const schoolsRes = await db.collection('schools')
        .where({
          name: db.command.exists(true),
          region: db.command.exists(true)
        })
        .field({
          _id: false,
          name: true,
          logo: true,
          location: true,
          region: true,
          introduction: true,
          priority: true,
          id: true
        })
        .get()

      if (schoolsRes.data && schoolsRes.data.length > 0) {
        const schools = schoolsRes.data.sort((a, b) => (a.priority || 0) - (b.priority || 0))
        this.setData({ 
          schools,
          loading: false
        })
      } else {
        throw new Error('未找到学校数据')
      }
    } catch (err) {
      console.error('获取数据失败：', err)
      this.setData({
        error: '获取数据失败，请稍后重试',
        loading: false
      })
    }
  },

  // 处理输入变化
  onInputChange(e) {
    this.setData({
      searchValue: e.detail
    })
  },

  // 处理搜索
  onSearch() {
    const searchValue = (this.data.searchValue || '').trim().toLowerCase()
    if (!searchValue) {
      this.setData({
        showFiltered: false,
        filteredSchools: []
      })
      return
    }

    const filteredSchools = this.data.schools.filter(school => {
      return (
        (school.name && school.name.toLowerCase().includes(searchValue)) ||
        (school.location && school.location.toLowerCase().includes(searchValue)) ||
        (school.introduction && school.introduction.toLowerCase().includes(searchValue))
      )
    })

    this.setData({
      filteredSchools,
      showFiltered: true
    })
  },

  // 处理取消搜索
  onCancel() {
    this.setData({
      searchValue: '',
      showFiltered: false,
      filteredSchools: []
    })
  },

  // 获取学校数据
  async fetchSchools() {
    try {
      this.setData({ loading: true })
      
      const query = {
        name: db.command.exists(true)
      }
      
      // 如果有选中的地区，添加地区筛选条件
      if (this.data.currentRegion) {
        query.region = this.data.currentRegion
      }
      
      const res = await db.collection('schools')
        .where(query)
        .field({
          _id: false,
          name: true,
          logo: true,
          location: true,
          region: true,
          introduction: true,
          priority: true,
          id: true
        })
        .get()
      
      if (res.data && res.data.length > 0) {
        const schools = res.data.sort((a, b) => (a.priority || 0) - (b.priority || 0))
        this.setData({ 
          schools,
          loading: false
        })
      } else {
        this.setData({
          schools: [],
          loading: false
        })
      }
    } catch (err) {
      console.error('获取学校数据失败:', err)
      this.setData({
        error: '获取数据失败，请稍后重试',
        loading: false
      })
    }
  },

  // 跳转到学校详情页
  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/schools/detail?id=${id}`,
      fail: (err) => {
        console.error('页面跳转失败:', err)
        wx.showToast({
          title: '页面跳转失败',
          icon: 'none'
        })
      }
    })
  },

  // 切换地区
  switchRegion(e) {
    const regionId = parseFloat(e.currentTarget.dataset.id)
    this.setData({
      currentRegion: regionId === this.data.currentRegion ? null : regionId,
      currentPage: 1
    }, () => {
      this.fetchSchools()
    })
  },

  // 下拉刷新
  async onRefresh() {
    this.setData({ isRefreshing: true })
    await this.loadData()
    this.setData({ isRefreshing: false })
  },

  onShareAppMessage() {
    return {
      title: '留学院校系统',
      path: '/pages/schools/schools'
    }
  },

  // 处理图片加载错误
  onLogoError(e) {
    const { index } = e.currentTarget.dataset
    const schools = this.data.schools
    schools[index].logo = defaultLogo
    this.setData({ schools })
  }
}) 