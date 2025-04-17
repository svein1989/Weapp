const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  try {
    const res = await cloud.getOpenData({
      list: [event.cloudID]
    })
    return {
      phoneInfo: res.list[0]
    }
  } catch (err) {
    console.error(err)
    return err
  }
} 