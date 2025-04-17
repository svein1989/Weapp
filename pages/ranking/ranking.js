const rankingData = [
    {
      id: 1,
      rank: 1,
      university: '麻省理工学院',
      region: '美国',
      trend: 0
    },
    {
      id: 2,
      rank: 2,
      university: '帝国理工学院',
      region: '英国',
      trend: 4
    },
    {
      id: 3,
      rank: 3,
      university: '牛津大学',
      region: '英国',
      trend: -1
    },
    {
      id: 4,
      rank: 4,
      university: '哈佛大学',
      region: '美国',
      trend: 0
    },
    {
      id: 5,
      rank: 5,
      university: '剑桥大学',
      region: '英国',
      trend: -3
    },
    {
      id: 6,
      rank: 6,
      university: '斯坦福大学',
      region: '美国',
      trend: -1
    },
    {
      id: 7,
      rank: 7,
      university: '苏黎世联邦理工学院',
      region: '瑞士',
      trend: 0
    },
    {
      id: 8,
      rank: 8,
      university: '新加坡国立大学',
      region: '新加坡',
      trend: 0
    },
    {
      id: 9,
      rank: 9,
      university: '伦敦大学学院',
      region: '英国',
      trend: 0
    },
    {
      id: 10,
      rank: 10,
      university: '加州理工学院',
      region: '美国',
      trend: 5
    },
    {
      id: 11,
      rank: 11,
      university: '宾夕法尼亚大学',
      region: '美国',
      trend: 0
    },
    {
      id: 12,
      rank: 12,
      university: '加州大学伯克利分校',
      region: '美国',
      trend: -2
    },
    {
      id: 13,
      rank: 13,
      university: '墨尔本大学',
      region: '澳大利亚',
      trend: 1
    },
    {
      id: 14,
      rank: 14,
      university: '北京大学',
      region: '中国（内地）',
      trend: 3
    },
    {
      id: 15,
      rank: 15,
      university: '南洋理工大学',
      region: '新加坡',
      trend: 11
    },
    {
      id: 16,
      rank: 16,
      university: '康奈尔大学',
      region: '美国',
      trend: -3
    },
    {
      id: 17,
      rank: 17,
      university: '香港大学',
      region: '中国香港特别行政区',
      trend: 9
    },
    {
      id: 18,
      rank: 18,
      university: '悉尼大学',
      region: '澳大利亚',
      trend: 1
    },
    {
      id: 19,
      rank: 19,
      university: '新南威尔士大学',
      region: '澳大利亚',
      trend: 0
    },
    {
      id: 20,
      rank: 20,
      university: '清华大学',
      region: '中国（内地）',
      trend: 5
    },
    {
      id: 21,
      rank: 21,
      university: '芝加哥大学',
      region: '美国',
      trend: 0
    },
    {
      id: 22,
      rank: 22,
      university: '普林斯顿大学',
      region: '美国',
      trend: 0
    },
    {
      id: 23,
      rank: 23,
      university: '耶鲁大学',
      region: '美国',
      trend: 0
    },
    {
      id: 24,
      rank: 24,
      university: '巴黎文理研究大学',
      region: '法国',
      trend: 0
    },
    {
      id: 25,
      rank: 25,
      university: '多伦多大学',
      region: '加拿大',
      trend: 0
    },
    {
      id: 26,
      rank: 26,
      university: '洛桑联邦理工学院',
      region: '瑞士',
      trend: 0
    },
    {
      id: 27,
      rank: 27,
      university: '爱丁堡大学',
      region: '英国',
      trend: 0
    },
    {
      id: 28,
      rank: 28,
      university: '慕尼黑工业大学',
      region: '德国',
      trend: 0
    },
    {
      id: 29,
      rank: 29,
      university: '麦吉尔大学',
      region: '加拿大',
      trend: 0
    },
    {
      id: 30,
      rank: 30,
      university: '澳大利亚国立大学',
      region: '澳大利亚',
      trend: 0
    },
    {
      id: 31,
      rank: 31,
      university: '首尔大学',
      region: '韩国',
      trend: 0
    },
    {
      id: 32,
      rank: 32,
      university: '约翰霍普金斯大学',
      region: '美国',
      trend: 0
    },
    {
      id: 33,
      rank: 33,
      university: '东京大学',
      region: '日本',
      trend: 0
    },
    {
      id: 34,
      rank: 34,
      university: '哥伦比亚大学',
      region: '美国',
      trend: 0
    },
    {
      id: 35,
      rank: 35,
      university: '伦敦政治经济学院',
      region: '英国',
      trend: 0
    },
    {
      id: 36,
      rank: 36,
      university: '洛杉矶加州大学',
      region: '美国',
      trend: 0
    },
    {
      id: 37,
      rank: 37,
      university: '明尼苏达大学',
      region: '美国',
      trend: 0
    },
    {
      id: 38,
      rank: 38,
      university: '曼彻斯特大学',
      region: '英国',
      trend: 0
    },
    {
      id: 39,
      rank: 39,
      university: '荷兰阿姆斯特丹大学',
      region: '荷兰',
      trend: 0
    },
    {
      id: 40,
      rank: 40,
      university: '柏林自由大学',
      region: '德国',
      trend: 0
    },
    {
      id: 41,
      rank: 41,
      university: '芬兰赫尔辛基大学',
      region: '芬兰',
      trend: 0
    },
    {
      id: 42,
      rank: 42,
      university: '香港中文大学',
      region: '中国香港特别行政区',
      trend: 0
    },
    {
      id: 43,
      rank: 43,
      university: '东京工业大学',
      region: '日本',
      trend: 0
    },
    {
      id: 44,
      rank: 44,
      university: '新加坡管理大学',
      region: '新加坡',
      trend: 0
    },
    {
      id: 45,
      rank: 45,
      university: '格拉斯哥大学',
      region: '英国',
      trend: 0
    },
    {
      id: 46,
      rank: 46,
      university: '悉尼科技大学',
      region: '澳大利亚',
      trend: 0
    },
    {
      id: 47,
      rank: 47,
      university: '兰卡斯特大学',
      region: '英国',
      trend: 0
    },
    {
      id: 48,
      rank: 48,
      university: '上海交通大学',
      region: '中国（内地）',
      trend: 0
    },
    {
      id: 49,
      rank: 49,
      university: '布里斯托大学',
      region: '英国',
      trend: 0
    },
    {
      id: 50,
      rank: 50,
      university: '莱斯大学',
      region: '美国',
      trend: 0
    }
  ]
  
  
  Page({
    data: {
      rankings: [],
      pageNum: 1,
      pageSize: 20,
      hasMore: true,
      isRefreshing: false,
      loading: false
    },
  
    onLoad() {
      this.loadRankings()
    },
  
    loadRankings() {
      if (this.data.loading || !this.data.hasMore) return
      
      this.setData({ loading: true })
      
      const start = (this.data.pageNum - 1) * this.data.pageSize
      const end = start + this.data.pageSize
      const newRankings = rankingData.slice(start, end)
  
      if (newRankings.length > 0) {
        setTimeout(() => {
          this.setData({
            rankings: [...this.data.rankings, ...newRankings],
            pageNum: this.data.pageNum + 1,
            hasMore: end < rankingData.length,
            loading: false
          })
          console.log('加载完成，当前数据条数：', this.data.rankings.length)
        }, 500)
      } else {
        this.setData({
          hasMore: false,
          loading: false
        })
      }
    },
  
    onReady() {
      // 页面加载完成后，确保scroll-view高度正确
      wx.createSelectorQuery()
        .select('.table-body')
        .boundingClientRect((rect) => {
          console.log('scroll-view高度：', rect.height)
        })
        .exec()
    },
  
    // 下拉刷新
    async onRefresh() {
      if (this.data.loading) return
  
      this.setData({
        isRefreshing: true,
        rankings: [],
        pageNum: 1,
        hasMore: true
      })
      
      await this.loadRankings()
      this.setData({ isRefreshing: false })
    },
  
    // 上拉加载更多
    onScrollToLower() {
      console.log('触发加载更多，当前页码：', this.data.pageNum)
      if (this.data.hasMore && !this.data.loading) {
        this.loadRankings()
      }
    }
  }) 