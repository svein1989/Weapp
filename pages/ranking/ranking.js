Page({
    data: {
      rankings: [],
      pageNum: 1,
      pageSize: 20,
      hasMore: true,
      isRefreshing: false
    },
  
    onLoad() {
      this.loadRankings()
    },
  
    // 加载排名数据
    loadRankings() {
      // 模拟数据，实际应该从服务器获取
      const newRankings = [
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
          university: '伦敦帝国学院',
          region: '英国',
          trend: 4
        },
        {
          id: 3,
          rank: 3,
          university: '牛津大学',
          region: '英国',
          trend: 0
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
            trend: +5
          },
        // ... 更多数据
      ]
  
      this.setData({
        rankings: [...this.data.rankings, ...newRankings],
        pageNum: this.data.pageNum + 1,
        hasMore: newRankings.length === this.data.pageSize
      })
    },
  
    // 下拉刷新
    async onRefresh() {
      this.setData({
        isRefreshing: true,
        rankings: [],
        pageNum: 1
      })
      await this.loadRankings()
      this.setData({ isRefreshing: false })
    },
  
    // 上拉加载更多
    loadMore() {
      if (this.data.hasMore) {
        this.loadRankings()
      }
    }
  }) 