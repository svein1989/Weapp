// 删除这行，因为wx-server-sdk只能在云函数中使用
// const cloud = require('wx-server-sdk')

async function getUserProfile() {
    try {
      // 获取用户信息
      const userInfoRes = await wx.getUserProfile({
        desc: '用于完善个人资料'
      })
  
      // 获取手机号码按钮是单独的，在页面中通过按钮触发
      // 这里先保存基本信息
      const userInfo = userInfoRes.userInfo
      
      // 调用云函数存储用户信息
      const db = wx.cloud.database()
      const userCollection = db.collection('user')
      
      // 检查用户是否已存在
      const { data } = await userCollection.where({
        _openid: '{openid}'  // 使用特殊字符串，云开发会自动替换为当前用户openid
      }).get()
      
      if (data.length === 0) {
        // 新用户，创建记录
        await userCollection.add({
          data: {
            nickName: userInfo.nickName,
            avatarUrl: userInfo.avatarUrl,
            gender: userInfo.gender,
            country: userInfo.country,
            province: userInfo.province,
            city: userInfo.city,
            phoneNumber: '',  // 手机号待更新
            createTime: db.serverDate(),
            updateTime: db.serverDate()
          }
        })
      } else {
        // 更新现有用户信息
        await userCollection.doc(data[0]._id).update({
          data: {
            nickName: userInfo.nickName,
            avatarUrl: userInfo.avatarUrl,
            gender: userInfo.gender,
            country: userInfo.country,
            province: userInfo.province,
            city: userInfo.city,
            updateTime: db.serverDate()
          }
        })
      }
  
      // 设置本地存储标记
      wx.setStorageSync('storage_info', 1)
      wx.setStorageSync('userInfo', userInfo)
  
      return userInfo
    } catch (err) {
      console.error('获取用户信息失败', err)
      throw err
    }
  }
  
  // 更新用户手机号
  async function updateUserPhone(phoneNumber) {
    try {
      const db = wx.cloud.database()
      const userCollection = db.collection('user')
      
      const { data } = await userCollection.where({
        _openid: '{openid}'  // 使用特殊字符串，云开发会自动替换为当前用户openid
      }).get()
  
      if (data.length > 0) {
        await userCollection.doc(data[0]._id).update({
          data: {
            phoneNumber: phoneNumber,
            updateTime: db.serverDate()
          }
        })
      }
    } catch (err) {
      console.error('更新手机号失败', err)
      throw err
    }
  }
  
  // 确保正确导出函数
  module.exports = {
    getUserProfile,
    updateUserPhone
  } 