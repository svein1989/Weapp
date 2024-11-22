Page({
    data: {
      activeTab: 0,
      gridItems: [
        { id: 1, text: '院校系统', icon: 'school' },
        { id: 2, text: '大学排名', icon: 'chart-trending-o' },
        { id: 3, text: '经验分享', icon: 'share' },
        { id: 4, text: '英语提升', icon: 'edit' },
        { id: 5, text: '预约咨询', icon: 'calendar-o' },
        { id: 6, text: '录取案例', icon: 'certificate' },
        { id: 7, text: '留学服务', icon: 'service-o' },
        { id: 8, text: '直播讲座', icon: 'video-o' }
      ],
      subPages: [],
      pageNum: 1,
      hasMore: true
    },
  
    onLoad() {
      this.loadSubPages()
    },
  
    loadSubPages() {
      // 模拟加载数据
      const newPages = [...Array(10)].map((_, index) => ({
        id: this.data.subPages.length + index + 1,
        title: `二级页面标题 ${this.data.subPages.length + index + 1}`,
        description: '这里是二级页面的简短描述信息...',
        image: '/images/default.png'
      }))
  
      this.setData({
        subPages: [...this.data.subPages, ...newPages],
        hasMore: this.data.pageNum < 3 // 模拟只有3页数据
      })
    },
  
    loadMore() {
      if (!this.data.hasMore) return
      this.setData({ pageNum: this.data.pageNum + 1 })
      this.loadSubPages()
    },
  
    onGridItemClick(e) {
      const id = e.currentTarget.dataset.id
      // 处理网格项点击
      wx.navigateTo({
        url: `/pages/detail/detail?id=${id}`
      })
    },
  
    onSubPageClick(e) {
      const id = e.currentTarget.dataset.id
      // 处理二级页面点击
      wx.navigateTo({
        url: `/pages/subpage/subpage?id=${id}`
      })
    },
  
    onTabChange(event) {
      const tabIndex = event.detail
      this.setData({ activeTab: tabIndex })
      
      // 切换对应的页面
      const pages = ['index', 'about', 'profile']
      if (tabIndex !== 0) {
        wx.navigateTo({
          url: `/pages/${pages[tabIndex]}/${pages[tabIndex]}`
        })
      }
    }
  }) 