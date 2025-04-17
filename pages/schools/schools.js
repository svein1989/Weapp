const schoolsData = require('../../data/schools.js')

// 修改默认图片路径
const defaultLogo = 'https://img.yzcdn.cn/vant/logo.png'  // 临时使用在线图片
const defaultEmpty = 'https://img.yzcdn.cn/vant/empty-image-default.png'

Page({
  data: {
    regions: [],
    schools: [],
    currentRegion: null,  // 改名以匹配 wxml
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
    // 加载地区数据
    this.setData({
      regions: schoolsData.regions.sort((a, b) => a.priority - b.priority)
    })
    
    // 直接从本地数据文件获取数据
    this.setData({
      schools: schoolsData.universities || [],
      loading: false
    })
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
        (school.country && school.country.toLowerCase().includes(searchValue)) ||
        (school.description && school.description.toLowerCase().includes(searchValue))
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
  fetchSchools() {
    try {
      // 使用本地数据
      this.setData({
        schools: schoolsData.universities,
        loading: false
      })
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

  // 修改方法名以匹配 wxml 中的绑定
  switchRegion(e) {
    const regionId = parseInt(e.currentTarget.dataset.id)
    this.setData({
      currentRegion: regionId === this.data.currentRegion ? null : regionId,
      currentPage: 1
    }, () => {
      this.fetchSchools()
    })
  },

  async onRefresh() {
    this.setData({ isRefreshing: true })
    await this.fetchSchools()
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
    schools[index].logo = '/images/schools/default-logo.png'  // 设置默认图片
    this.setData({ schools })
  }
}) 