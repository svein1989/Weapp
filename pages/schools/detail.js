const db = wx.cloud.database()
const defaultImage = 'https://img.yzcdn.cn/vant/empty-image-default.png'

Page({
  data: {
    school: null,
    loading: true,
    error: null,
    currentTab: 0,
    tabs: ['学校简介', '专业介绍', '图片展示'],
    showGallery: false,
    currentImageIndex: 0,
    showQRCode: false
  },

  async onLoad(options) {
    if (!options.id) {
      this.setData({
        error: '未找到学校ID',
        loading: false
      })
      return
    }

    // 将字符串ID转换为数字
    const schoolId = parseInt(options.id)
    if (isNaN(schoolId)) {
      this.setData({
        error: '学校ID格式错误',
        loading: false
      })
      return
    }

    await this.loadSchoolData(schoolId)
  },

  async loadSchoolData(schoolId) {
    try {
      this.setData({ loading: true, error: null })
      console.log('正在查询学校ID:', schoolId) // 添加日志

      const res = await db.collection('schools')
        .where({
          id: schoolId
        })
        .get()

      console.log('查询结果:', res.data) // 添加日志

      if (res.data && res.data.length > 0) {
        const school = res.data[0]
        // 确保必要的字段存在
        school.gallery = school.gallery || []
        school.majors = school.majors || []
        school.photo = school.photo || defaultImage
        school.logo = school.logo || defaultImage
        school.introduction = school.introduction || '暂无简介'
        school.location = school.location || '暂无地址信息'
        
        this.setData({
          school,
          loading: false
        })

        // 设置导航栏标题
        wx.setNavigationBarTitle({
          title: school.name || '学校详情'
        })
      } else {
        throw new Error('未找到学校信息')
      }
    } catch (err) {
      console.error('获取学校数据失败:', err)
      this.setData({
        error: '获取学校信息失败，请稍后重试',
        loading: false
      })
    }
  },

  // 处理图片加载错误
  onImageError(e) {
    const { type } = e.currentTarget.dataset
    const school = this.data.school
    
    if (type === 'photo') {
      school.photo = defaultImage
    } else if (type === 'logo') {
      school.logo = defaultImage
    }
    
    this.setData({ school })
  },

  // 切换标签页
  switchTab(e) {
    this.setData({
      currentTab: e.detail.index
    })
  },

  // 预览图片
  previewImage(e) {
    const { index } = e.currentTarget.dataset
    const { gallery } = this.data.school
    
    if (!gallery || !gallery.length) return
    
    wx.previewImage({
      current: gallery[index],
      urls: gallery,
      fail: () => {
        wx.showToast({
          title: '图片预览失败',
          icon: 'none'
        })
      }
    })
  },

  // 复制文本
  copyText(e) {
    const { text } = e.currentTarget.dataset
    if (!text) return
    
    wx.setClipboardData({
      data: text,
      success: () => {
        wx.showToast({
          title: '复制成功',
          icon: 'success'
        })
      },
      fail: () => {
        wx.showToast({
          title: '复制失败',
          icon: 'none'
        })
      }
    })
  },

  // 显示二维码
  showQRCode() {
    this.setData({ showQRCode: true })
  },

  // 关闭二维码
  onQRCodeClose() {
    this.setData({ showQRCode: false })
  },

  // 重试加载
  retryLoad() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const options = currentPage.options
    
    if (options && options.id) {
      const schoolId = parseInt(options.id)
      if (!isNaN(schoolId)) {
        this.loadSchoolData(schoolId)
      } else {
        wx.navigateBack({ delta: 1 })
      }
    } else {
      wx.navigateBack({ delta: 1 })
    }
  },

  // 返回上一页
  goBack() {
    wx.navigateBack({
      delta: 1
    })
  },

  onShareAppMessage() {
    const school = this.data.school
    return {
      title: school ? `${school.name} - 学校详情` : '学校详情',
      path: `/pages/schools/detail?id=${school ? school.id : ''}`
    }
  }
}) 