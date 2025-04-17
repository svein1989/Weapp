Page({
    data: {},
  
    makePhoneCall() {
      wx.makePhoneCall({
        phoneNumber: '13606030730'
      })
    },
  
    openLocation() {
      wx.openLocation({
        latitude: 24.4800, // 请替换为实际经纬度
        longitude: 118.0900,
        name: '宝择留学',
        address: '厦门市思明区钻石海岸'
      })
    },
  
    followOfficialAccount() {
      wx.navigateToMiniProgram({
        appId: 'wxf1387d4eb1bdb8b6', // 请替换为实际的公众号 appId
        path: 'pages/index/index？id=123',
        extraData: {
            foo: 'bar'
          },
          success(res) {
            // 打开成功的回调
          }
      })

    },
  
    onTabChange(event) {
      const index = event.detail
      if (index === 0) {  // 首页
        wx.switchTab({
          url: '/pages/index/index'
        })
      } else if (index === 2) {  // 我的
        wx.switchTab({
          url: '/pages/profile/profile'
        })
      }
    }
  }) 