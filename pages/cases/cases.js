const db = wx.cloud.database()

Page({
  data: {
    searchValue: '',
    cases: [],
    pageSize: 20,
    currentPage: 1,
    hasMore: true,
    isRefreshing: false,
    loading: true,
    allCases: [], // 存储所有案例数据
    originalCases: [] // 存储原始案例数据
  },

  async onLoad() {
    await this.loadAllCases()
  },

  // 从云数据库加载所有案例数据
  async loadAllCases() {
    try {
      wx.showLoading({
        title: '加载中...',
      })

      // 获取数据总数
      const countResult = await db.collection('caseData').count()
      const total = countResult.total
      
      // 分批次获取所有数据
      const batchTimes = Math.ceil(total / 100)
      const tasks = []
      
      for (let i = 0; i < batchTimes; i++) {
        const promise = db.collection('caseData')
          .skip(i * 100)
          .limit(100)
          .get()
        tasks.push(promise)
      }

      // 等待所有请求完成
      const results = await Promise.all(tasks)
      
      // 合并所有数据
      const casesData = results.reduce((acc, cur) => {
        return acc.concat(cur.data)
      }, [])

      // 对案例数据进行预处理，提取预览信息
      const processedCases = casesData.map(item => ({
        ...item,
        backgroundPreview: item.background ? item.background.substring(0, 50) + '...' : ''
      }))
      
      this.setData({ 
        allCases: processedCases,
        originalCases: processedCases, // 保存原始数据
        loading: false
      }, () => {
        this.loadCases()
      })
    } catch (err) {
      console.error('获取案例数据失败：', err)
      wx.showToast({
        title: '加载失败',
        icon: 'error'
      })
      this.setData({
        loading: false,
        allCases: [],
        originalCases: []
      })
    } finally {
      wx.hideLoading()
    }
  },

  // 加载案例数据（分页）
  loadCases() {
    const { currentPage, pageSize, allCases, cases: currentCases } = this.data
    const start = (currentPage - 1) * pageSize
    const newCases = allCases.slice(start, start + pageSize)
    
    this.setData({
      cases: [...currentCases, ...newCases],
      hasMore: start + pageSize < allCases.length
    })
  },

  // 搜索框输入
  onSearchChange(e) {
    const searchValue = e.detail
    this.setData({ searchValue })
    
    // 当搜索框为空时，恢复原始数据
    if (!searchValue.trim()) {
      this.setData({
        allCases: this.data.originalCases,
        cases: [],
        currentPage: 1
      }, () => {
        this.loadCases()
      })
    }
  },

  // 执行搜索
  onSearch() {
    const searchKey = this.data.searchValue.toLowerCase().trim()
    
    // 如果搜索关键词为空，恢复原始数据
    if (!searchKey) {
      this.setData({
        allCases: this.data.originalCases,
        cases: [],
        currentPage: 1
      }, () => {
        this.loadCases()
      })
      return
    }

    // 从原始数据中搜索
    const filteredCases = this.data.originalCases.filter(item => {
      return (
        (item.majorName && item.majorName.toLowerCase().includes(searchKey)) ||
        (item.majorNameEn && item.majorNameEn.toLowerCase().includes(searchKey)) ||
        (item.universityName && item.universityName.toLowerCase().includes(searchKey)) ||
        (item.background && item.background.toLowerCase().includes(searchKey))
      )
    })

    this.setData({
      allCases: filteredCases,
      cases: [],
      currentPage: 1,
      hasMore: filteredCases.length > this.data.pageSize
    }, () => {
      this.loadCases()
    })
  },

  // 下拉刷新
  async onRefresh() {
    this.setData({ 
      isRefreshing: true,
      currentPage: 1,
      cases: []
    })
    await this.loadAllCases()  // 重新加载所有数据
    this.setData({ isRefreshing: false })
  },

  // 加载更多
  loadMore() {
    if (this.data.hasMore) {
      this.setData({
        currentPage: this.data.currentPage + 1
      }, () => {
        this.loadCases()
      })
    }
  },

  // 跳转到详情页
  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/cases/detail?id=${id}`
    })
  }
}) 