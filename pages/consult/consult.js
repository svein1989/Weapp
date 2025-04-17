Page({
    data: {},
  
    onLoad() {
      wx.setNavigationBarTitle({
        title: '预约咨询'
      })
    },
  
    onShareAppMessage() {
      return {
        title: '预约咨询',
        path: '/pages/consult/consult'
      }
    }
  }) 