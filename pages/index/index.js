const db = wx.cloud.database()

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
      hasMore: true,
      loading: false
    },
  
    onLoad() {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#42B983'
      })
      this.loadArticles()
    },
  
    async loadArticles() {
      if (this.data.loading || !this.data.hasMore) return

      try {
        this.setData({ loading: true })

        // 从云数据库获取文章
        const res = await db.collection('articles')
          .orderBy('publishTime', 'desc')
          .get()

        if (res.data && res.data.length > 0) {
          // 分离置顶和普通文章
          const pinnedArticles = res.data.filter(article => article.isPinned)
          const normalArticles = res.data.filter(article => !article.isPinned)

          this.setData({
            pinnedPages: pinnedArticles.slice(0, 5), // 最多显示5个置顶
            subPages: normalArticles,
            hasMore: false, // 一次性加载所有文章，所以没有更多了
            loading: false
          })
        } else {
          this.setData({
            hasMore: false,
            loading: false
          })
        }
      } catch (err) {
        console.error('获取文章列表失败：', err)
        wx.showToast({
          title: '加载失败',
          icon: 'error'
        })
        this.setData({
          loading: false
        })
      }
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
        case 4: // 英语提升
          wx.navigateTo({
            url: '/pages/english/english'
          })
          break;
        case 5: // 预约咨询
          wx.navigateTo({
            url: '/pages/consult/consult'
          })
          break;
        case 6: // 录取案例
          wx.navigateTo({
            url: '/pages/cases/cases'
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
      const index = event.detail
      if (index === 1) {  // 关于我们
        wx.switchTab({
          url: '/pages/about/about'
        })
      } else if (index === 2) {  // 我的
        wx.switchTab({
          url: '/pages/profile/profile'
        })
      }
      // 保持首页tab选中状态
      this.setData({
        activeTab: 0
      })
    },

    // 下拉刷新
    async onPullDownRefresh() {
      await this.loadArticles()
      wx.stopPullDownRefresh()
    }
}) 