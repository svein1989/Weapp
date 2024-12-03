const articles = [
    {
      id: 1,
      title: '英国G5名校申请要求最新变化',
      description: '2024年英国G5院校申请要求及截止日期汇总',
      thumbnail: '/images/articles/uk-g5.jpg',
      content: [
        {
          type: 'text',
          value: '2024年英国G5名校（牛津、剑桥、帝国理工、伦敦大学学院、伦敦政经）申请要求有以下重要变化：'
        },
        {
          type: 'image',
          value: '/images/articles/oxford.jpg',
          caption: '牛津大学新校区'
        },
        {
          type: 'text',
          value: `1. 牛津大学
            - IELTS最低要求提升至7.5
            - 本科GPA要求提高至3.7/4.0
            - 申请截止日期提前至12月31日
  
            2. 剑桥大学
            - 新增数学能力测试要求
            - 面试将采用线上+线下混合模式
            
            3. 帝国理工学院
            - 工程类专业要求IELTS单项不低于7.0
            - 新增实验室经验要求`
        }
      ],
      isPinned: true,
      publishTime: '2024-03-13',
      category: 'notice',
      views: 1250
    },
    {
      id: 2,
      title: '雅思口语考试技巧分享',
      description: '来自雅思考官的内部建议和真题解析',
      thumbnail: '/images/articles/ielts.jpg',
      content: [
        {
          type: 'text',
          value: '雅思口语考试是很多考生最担心的部分，本文将从以下几个方面详细讲解应对技巧：'
        },
        {
          type: 'text',
          value: `1. Part 1应答策略
            - 使用延伸句
            - 适当举例
            - 避免过于简单的回答
            
            2. Part 2演讲技巧
            - 如何利用1分钟准备时间
            - 演讲结构的组织
            - 常见话题的应对方法`
        }
      ],
      isPinned: false,
      publishTime: '2024-03-12',
      category: 'experience',
      views: 856
    }
  ]
  
  export default articles 