const auth = require('../../utils/auth.js')

Page({
  data: {
    userInfo: {},
    exchangeRates: [
      { name: '美元', symbol: 'USD', rate: '7.2341', trend: 'up' },
      { name: '港币', symbol: 'HKD', rate: '0.9234', trend: 'down' },
      { name: '英镑', symbol: 'GBP', rate: '9.1234', trend: 'up' },
      { name: '新加坡元', symbol: 'SGD', rate: '5.3456', trend: 'down' },
      { name: '马来西亚元', symbol: 'MYR', rate: '1.5234', trend: 'up' },
      { name: '澳元', symbol: 'AUD', rate: '4.7123', trend: 'down' },
      { name: '加拿大元', symbol: 'CAD', rate: '5.3214', trend: 'up' },
      { name: '泰铢', symbol: 'THB', rate: '0.2012', trend: 'down' }
    ],
    lastUpdateTime: '',
    showPhoneButton: false
  },

  onLoad() {
    // 删除这部分代码
    // if (!wx.cloud) {
    //   console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    // } else {
    //   wx.cloud.init({
    //     env: 'your-env-id',
    //     traceUser: true
    //   })
    // }
    
    this.updateExchangeRates()
    setInterval(() => {
      this.updateExchangeRates()
    }, 300000)
  },

  onShow() {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({ 
        userInfo,
        showPhoneButton: true  // 确保这个值被正确设置
      })
    }
    this.updateExchangeRates()
  },

  async handleUserProfile() {
    try {
      if (!wx.getStorageSync('storage_info')) {
        const userInfo = await auth.getUserProfile()
        this.setData({ 
          userInfo,
          showPhoneButton: true
        })
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        })
      }
    } catch (err) {
      wx.showToast({
        title: '获取用户信息失败',
        icon: 'none'
      })
    }
  },

  async handleGetPhoneNumber(e) {
    if (e.detail.errMsg === 'getPhoneNumber:ok') {
      try {
        // 调用云函数解密手机号
        const { result } = await wx.cloud.callFunction({
          name: 'getPhoneNumber',
          data: {
            cloudID: e.detail.cloudID
          }
        })
        
        // 更新用户手机号
        await auth.updateUserPhone(result.phoneInfo.phoneNumber)
        
        wx.showToast({
          title: '手机号绑定成功',
          icon: 'success'
        })
      } catch (err) {
        console.error('获取手机号失败', err)
        wx.showToast({
          title: '获取手机号失败',
          icon: 'none'
        })
      }
    }
  },

  updateExchangeRates() {
    // 这里应该调用真实的汇率API
    // 示例中使用模拟数据
    const now = new Date()
    this.setData({
      lastUpdateTime: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
    })
  },

  onTabChange(event) {
    const index = event.detail
    if (index === 0) {  // 首页
      wx.switchTab({
        url: '/pages/index/index'
      })
    } else if (index === 1) {  // 关于我们
      wx.switchTab({
        url: '/pages/about/about'
      })
    }
  }
}) 