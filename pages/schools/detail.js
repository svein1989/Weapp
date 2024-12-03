const schoolsData = {
    regions: [
      { id: 1, name: '中国香港', priority: 1 },
      { id: 2, name: '英国', priority: 2 },
      { id: 3, name: '澳大利亚', priority: 3 },
      { id: 4, name: '新加坡', priority: 4 },
      { id: 5, name: '中国澳门', priority: 5 },
      { id: 6, name: '美国', priority: 6 },
      { id: 7, name: '泰国', priority: 7 },
      { id: 8, name: '马来西亚', priority: 8 }
    ],
    universities: [
      {
        id: 1,
        name: '香港大学',
        region: 1,
        logo: '/images/schools/logos/hku.png',
        photo: '/images/schools/photos/hku-campus.jpg',
        location: '香港薄扶林道',
        priority: 1,
        introduction: '香港大学（The University of Hong Kong）是香港历史最悠久的高等教育学府...',
        majors: [
          {
            name: '工商管理',
            duration: '4年',
            tuition: '171,000港币/年'
          },
          {
            name: '计算机科学',
            duration: '4年',
            tuition: '171,000港币/年'
          }
        ]
      }
    ]
  }
  
  Page({
    data: {
      school: null,
      showQRCode: false
    },
  
    onLoad(options) {
      const schoolId = parseInt(options.id)
      const school = schoolsData.universities.find(s => s.id === schoolId)
      
      if (school) {
        this.setData({ school })
        wx.setNavigationBarTitle({
          title: school.name
        })
      } else {
        wx.showToast({
          title: '学校信息不存在',
          icon: 'error'
        })
        setTimeout(() => {
          wx.navigateBack()
        }, 1500)
      }
  
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage']
      })
    },
  
    onShareAppMessage() {
      const { school } = this.data
      return {
        title: `${school.name} - 院校详情`,
        path: `/pages/schools/detail?id=${school.id}`,
        imageUrl: school.photo
      }
    },
  
    onShareTap() {
      wx.updateShareMenu({
        withShareTicket: true,
        success: () => {
          wx.showToast({
            title: '请点击右上角分享',
            icon: 'none',
            duration: 2000
          })
        }
      })
    },
  
    onImageError(e) {
      const type = e.currentTarget.dataset.type
      const defaultImage = type === 'logo' ? '/images/schools/default-logo.png' : '/images/schools/default-photo.png'
      
      const school = this.data.school
      school[type] = defaultImage
      this.setData({ school })
    },
  
    showQRCode() {
      this.setData({ showQRCode: true })
    },
  
    onQRCodeClose() {
      this.setData({ showQRCode: false })
    }
  }) 