// 直接在文件中定义数据，不使用导入
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
      regions: [],
      currentRegion: 1,
      schools: [],
      searchKey: '',
      isRefreshing: false,
      hasMore: false
    },
  
    onLoad() {
      console.log('页面加载')
      
      try {
        const sortedRegions = [...schoolsData.regions].sort((a, b) => a.priority - b.priority)
        console.log('Sorted regions:', sortedRegions)
        
        this.setData({ 
          regions: sortedRegions,
          currentRegion: sortedRegions[0]?.id || 1
        }, () => {
          console.log('Current data state:', this.data)
          this.loadSchools()
        })
      } catch (error) {
        console.error('Error in onLoad:', error)
      }
    },
  
    loadSchools() {
      try {
        console.log('Loading schools for region:', this.data.currentRegion)
        
        const regionSchools = schoolsData.universities
          .filter(school => school.region === this.data.currentRegion)
          .sort((a, b) => a.priority - b.priority)
        
        console.log('Filtered schools:', regionSchools)
        
        this.setData({ 
          schools: regionSchools,
          hasMore: false
        })
      } catch (error) {
        console.error('Error in loadSchools:', error)
      }
    },
  
    switchRegion(e) {
      try {
        const id = parseInt(e.currentTarget.dataset.id)
        console.log('Switching to region:', id)
        
        this.setData({ currentRegion: id }, () => {
          this.loadSchools()
        })
      } catch (error) {
        console.error('Error in switchRegion:', error)
      }
    },
  
    onSearch() {
      if (!this.data.searchKey.trim()) {
        this.loadSchools()
        return
      }
  
      const searchResult = schoolsData.universities.filter(school => {
        const key = this.data.searchKey.toLowerCase()
        return (
          school.name.toLowerCase().includes(key) ||
          school.location.toLowerCase().includes(key) ||
          school.majors.some(major => 
            major.name.toLowerCase().includes(key)
          )
        )
      })
  
      this.setData({ 
        schools: searchResult,
        hasMore: false
      })
    },
  
    onSearchInput(e) {
      this.setData({ searchKey: e.detail.value })
    },
  
    async onRefresh() {
      this.setData({ isRefreshing: true })
      await this.loadSchools()
      this.setData({ isRefreshing: false })
    },
  
    goToSchool(e) {
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/schools/detail?id=${id}`
      })
    },
  
    onShareAppMessage() {
      return {
        title: '留学院校系统',
        path: '/pages/schools/schools'
      }
    },
  
    onLogoError(e) {
      try {
        // 获取当前项的索引
        const index = e.currentTarget.dataset.index
        console.log('Logo error at index:', index)
  
        // 创建新的数组副本
        const updatedSchools = [...this.data.schools]
        
        // 检查索引是否有效
        if (index >= 0 && index < updatedSchools.length) {
          // 设置默认图片（使用本地路径）
          const defaultLogo = '/images/schools/default-logo.png'
          updatedSchools[index] = {
            ...updatedSchools[index],
            logo: defaultLogo
          }
          
          // 更新数据
          this.setData({
            schools: updatedSchools
          })
        }
      } catch (error) {
        console.error('Error in onLogoError:', error)
      }
    }
  }) 