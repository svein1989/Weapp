const db = wx.cloud.database()

Page({
  data: {
    article: null,
    isLoading: true,
    error: null
  },

  async onLoad(options) {
    const articleId = parseInt(options.id)
    await this.loadArticle(articleId)
  },

  async loadArticle(articleId) {
    if (!articleId) {
      this.setData({
        isLoading: false,
        error: '文章ID无效'
      })
      return
    }

    try {
      wx.showLoading({
        title: '加载中...',
      })

      // 直接查询指定 ID 的文章
      const res = await db.collection('articles')
        .where({
          id: articleId
        })
        .get()

      if (res.data && res.data.length > 0) {
        const article = res.data[0]
        this.setData({ 
          article,
          isLoading: false,
          error: null
        })
        
        // 设置页面标题
        wx.setNavigationBarTitle({
          title: article.title || '文章详情'
        })
      } else {
        this.setData({
          isLoading: false,
          error: '文章不存在'
        })
        
        wx.showToast({
          title: '文章不存在',
          icon: 'error'
        })
        
        setTimeout(() => {
          wx.navigateBack()
        }, 1500)
      }
    } catch (err) {
      console.error('获取文章失败：', err)
      this.setData({
        isLoading: false,
        error: '加载失败'
      })
      
      wx.showToast({
        title: '加载失败',
        icon: 'error'
      })
      
      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
    } finally {
      wx.hideLoading()
    }
  },

  // 重试加载
  retryLoad() {
    const articleId = this.data.article?.id || this.options?.id
    if (articleId) {
      this.setData({ isLoading: true, error: null })
      this.loadArticle(parseInt(articleId))
    }
  },

  onShareAppMessage() {
    const { article } = this.data
    if (article) {
      return {
        title: article.title,
        path: `/pages/article/article?id=${article.id}`
      }
    }
    return {
      title: '精选文章',
      path: '/pages/index/index'
    }
  }
}) 