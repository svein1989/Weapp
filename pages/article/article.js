import articles from '../../data/articles.js'

Page({
  data: {
    article: null
  },

  onLoad(options) {
    const articleId = parseInt(options.id)
    const article = articles.find(item => item.id === articleId)
    
    if (article) {
      this.setData({ article })
      wx.setNavigationBarTitle({
        title: article.title
      })
    } else {
      wx.showToast({
        title: '文章不存在',
        icon: 'error'
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
    }
  }
}) 