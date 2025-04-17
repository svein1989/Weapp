// app.js
App({
    onLaunch: function() {
      if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力')
      } else {
        wx.cloud.init({
          env: 'cloud1-7goau2ke9656707c', // 这里填入你的云开发环境ID
          traceUser: true
        })
      }
    },
    
    globalData: {
      userInfo: null
    }
  })
  