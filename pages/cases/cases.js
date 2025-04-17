const { cases: casesData } = require('../../data/casesData.js')

Page({
  data: {
    searchValue: '',
    cases: [],
    pageSize: 20,
    currentPage: 1,
    hasMore: true,
    isRefreshing: false,
    allCases: [], // 存储所有案例数据
    originalCases: [] // 存储原始案例数据
  },

  onLoad() {
    this.setData({ 
      allCases: casesData,
      originalCases: casesData // 保存原始数据
    }, () => {
      this.loadCases()
    })
  },

  // 加载案例数据
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
        item.majorName.toLowerCase().includes(searchKey) ||
        item.majorNameEn.toLowerCase().includes(searchKey) ||
        item.universityName.toLowerCase().includes(searchKey) ||
        item.background.toLowerCase().includes(searchKey)
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
    await this.loadCases()
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