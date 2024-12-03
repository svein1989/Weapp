import articles from '../../data/articles.js'

Page({
    data: {
      activeTab: 0,
      gridItems: [
        { id: 1, text: '院校系统', icon: '/images/icons/school.png' },
        { id: 2, text: '大学排名', icon: '/images/icons/rank.png' },
        { id: 3, text: '经验分享', icon: '/images/icons/share.png' },
        { id: 4, text: '英语提升', icon: '/images/icons/study.png' },
        { id: 5, text: '预约咨询', icon: '/images/icons/calendar.png' },
        { id: 6, text: '录取案例', icon: '/images/icons/case.png' },
        { id: 7, text: '留学服务', icon: '/images/icons/service.png' },
        { id: 8, text: '直播讲座', icon: '/images/icons/live.png' }
      ],
      pinnedPages: [], // 置顶文章
      subPages: [],    // 普通文章
      pageNum: 1,
      hasMore: true
    },
  
    onLoad() {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#42B983'
      })
      this.loadArticles()
    },
  
    loadArticles() {
      // 从 articles.js 加载文章并分类
      const pinnedArticles = articles.filter(article => article.isPinned)
      const normalArticles = articles.filter(article => !article.isPinned)
      
      // 按发布时间倒序排序
      const sortByDate = (a, b) => new Date(b.publishTime) - new Date(a.publishTime)
      pinnedArticles.sort(sortByDate)
      normalArticles.sort(sortByDate)

      this.setData({
        pinnedPages: pinnedArticles.slice(0, 5), // 最多显示5个置顶
        subPages: normalArticles,
        hasMore: false // 因为是静态数据，所以没有更多了
      })
    },
  
    onGridItemClick(e) {
      const id = e.currentTarget.dataset.id
      
      switch(id) {
        case 1: // 院校系统
          wx.navigateTo({
            url: '/pages/schools/schools'
          })
          break;
        case 2: // 大学排名
          wx.navigateTo({
            url: '/pages/ranking/ranking'
          })
          break;
        case 3: // 经验分享
          wx.navigateTo({
            url: '/pages/experience/experience'
          })
          break;
        default:
          wx.showToast({
            title: '功能开发中...',
            icon: 'none'
          })
      }
    },
  
    onSubPageClick(e) {
      const id = e.currentTarget.dataset.id
      // 跳转到文章详情页
      wx.navigateTo({
        url: `/pages/article/article?id=${id}`
      })
    },
  
    onTabChange(event) {
      const tabIndex = event.detail
      this.setData({ activeTab: tabIndex })
      
      if (tabIndex !== 0) {
        wx.showToast({
          title: '功能开发中...',
          icon: 'none'
        })
      }
    }
}) 