const db = wx.cloud.database()

Page({
  data: {
    case: null,
    loading: true,
    error: null
  },

  async onLoad(options) {
    await this.loadData(options)
  },

  async loadData(options) {
    const id = parseInt(options.id)
    
    this.setData({
      loading: true,
      error: null
    })

    try {
      // 直接查询指定 ID 的案例数据
      const res = await db.collection('caseData')
        .where({
          id: id
        })
        .get()
      
      if (res.data && res.data.length > 0) {
        const caseData = res.data[0]
        this.setData({ 
          case: caseData,
          loading: false
        })
        wx.setNavigationBarTitle({
          title: caseData.majorName || '案例详情'
        })
      } else {
        this.setData({
          error: '案例不存在',
          loading: false
        })
      }
    } catch (err) {
      console.error('获取案例数据失败：', err)
      this.setData({
        error: '加载失败，请稍后重试',
        loading: false
      })
    }
  },

  previewImage(e) {
    const url = e.currentTarget.dataset.url
    if (url) {
      wx.previewImage({
        current: url,
        urls: this.data.case?.images || [url]
      })
    }
  },

  goHome() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  onShareAppMessage() {
    const { case: caseData } = this.data
    if (caseData) {
      return {
        title: `${caseData.universityName} - ${caseData.majorName}录取案例`,
        path: `/pages/cases/detail?id=${caseData.id}`
      }
    }
    return {
      title: '留学案例',
      path: '/pages/cases/cases'
    }
  }
}) 