Page({
    data: {
      showQRCode: false
    },
  
    onLoad() {
      wx.setNavigationBarTitle({
        title: '英语提升'
      })
    },
  
    showQRCode() {
      this.setData({ showQRCode: true })
    },
  
    onQRCodeClose() {
      this.setData({ showQRCode: false })
    }
  }) 