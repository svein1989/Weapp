const { cases } = require('../../data/casesData.js')

Page({
  data: {
    case: null
  },

  onLoad(options) {
    const id = parseInt(options.id)
    const caseData = cases.find(item => item.id === id)

    if (caseData) {
      this.setData({ case: caseData })
      wx.setNavigationBarTitle({
        title: caseData.majorName
      })
    } else {
      wx.showToast({
        title: '案例不存在',
        icon: 'error'
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
    }
  },

  previewImage() {
    wx.previewImage({
      urls: [this.data.case.offerImage]
    })
  },

  goHome() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  onShareAppMessage() {
    const { case: caseData } = this.data
    return {
      title: `${caseData.universityName} - ${caseData.majorName}录取案例`,
      path: `/pages/cases/detail?id=${caseData.id}`
    }
  }
}) 