// 从外部导入数据
import schoolsData from '../../data/schools.js'

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
    console.log('Initial schools data:', schoolsData)
    
    if (!schoolsData || !schoolsData.regions || !schoolsData.universities) {
      console.error('Schools data is not properly structured')
      return
    }

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
      }, () => {
        console.log('Updated schools data:', this.data.schools)
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
      url: `/pages/school/detail?id=${id}`
    })
  },

  onShareAppMessage() {
    return {
      title: '留学院校系统',
      path: '/pages/schools/schools'
    }
  }
}) 