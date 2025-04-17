const schoolsData = {
    regions: [
      { id: 1, name: '中国香港', priority: 1 },
      { id: 2, name: '英国', priority: 2 },
      { id: 3, name: '澳大利亚', priority: 3 },
      { id: 4, name: '新加坡', priority: 4 },
      { id: 5, name: '加拿大', priority: 5 },
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
        photo: 'https://www.hku.hk/f/page/7648/546p284/aboutHKU@750.jpg',
        location: '香港薄扶林道',
        priority: 1,
        introduction: '香港大学，简称港大，是香港第一所公立研究型大学，大学本部位于香港岛中西区薄扶林龙虎山。大学成立于1911年，由两所当时已存在的高等院校——香港西医书院及香港工学院合并而成，并加设文学院，于1912年3月11日正式办学，是香港最早建立的高等教育及提供学士课程的教育机构，亦是英国在印度以东最早成立的大学。香港大学是亚洲以至全球最顶尖的大学之一，现时位居QS世界大学排名第17位、泰晤士高等教育世界大学排名第31位，QS亚洲大学排名第2位。该校自创校以来一直采用英文为主要教学语言，现在共有十所学术学院，作为跨学术领域的综合大学，其以工程学、医学、牙医学、法律、教育学、社会学、哲学、计算机科学、国际关系、建筑学、新闻学、社会科学、政治学、文学等著名。该校同时与其他世界著名大学，如加州大学伯克利分校，剑桥大学，北京大学，伦敦大学学院等设有独特的本科双学位项目。',
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
      },
      {
        id: 2,
        name: '英迪国际大学',
        region: 8,
        logo: 'http://www.rbedu.cc/upfile/2024/06/1717734800425.png',
        photo: 'https://imuchuangye.cn/Upload/image/20230727/1690432090117876.png',
        location: '森美兰州汝来，雪兰莪州梳邦再',
        priority: 8,
        introduction: '英迪国际大学是马来西亚高等教育部四星级大学(高级别)之一,也是马来西亚顶尖的私立大学之一。根据2024年QS世界大学排行榜,英迪国际大学位列第556位。英迪国际大学通过ISO9001:2000国际质量认证,是中马高等教育学历学位互认协定院校,在中华人民共和国教育部涉外教育信息监管网可查,毕业生可获得留服认证。英迪国际大学提供本科、硕士和博士等多个层次的教育。与来自美国、加拿大、英国、澳大利亚等20多个国家的200多所著名大学合作开展学分转移及联办课程,学生在英迪国际大学学习期间有机会获得英国、澳大利亚、美国等国家200多所大学的本科和硕士学位,这些学位受到全球认可。英迪国际大学的专业涵盖商科、计算机、工程、医学、心理学、教育学、大众传媒、艺术设计等多个领域。英迪国际大学拥有超过17000多名在校学生,其中包括来自近100个国家和地区的2000多名国际学生。该大学与全球和本地450多家跨国公司合作,包括IBM、谷歌、通用电气、优步、奔驰、微软、PWC、摩托罗拉等，提供超过200个世界级的雇主项目。',
        majors: [
          {
            name: '中医学',
            duration: '5年',
            tuition: '123,324马币/年'
          },
          {
            name: '工商管理',
            duration: '3年',
            tuition: '76,150马币/年'
          },
          {
            name: '国际商务',
            duration: '3年',
            tuition: '72,516马币/年'
          },
          {
            name: '数字化企业管理',
            duration: '3年',
            tuition: '72,523马币/年'
          },
          {
            name: '银行与金融',
            duration: '3年',
            tuition: '79,902马币/年'
          },
          {
            name: '会计&金融',
            duration: '3年',
            tuition: '79,886马币/年'
          },
          {
            name: '会计学',
            duration: '4年',
            tuition: '89,590马币/年'
          },
          {
            name: '数字化健身',
            duration: '3年',
            tuition: '78,330马币/年'
          },
          {
            name: '智能制造',
            duration: '3年',
            tuition: '78,347马币/年'
          },
          {
            name: '机械工程',
            duration: '4年',
            tuition: '91,164马币/年'
          },
          {
            name: '土木工程',
            duration: '3年',
            tuition: '91,183马币/年'
          },
          {
            name: '大众传媒',
            duration: '3年',
            tuition: '76,160马币/年'
          },
          {
            name: '数字媒体',
            duration: '3年',
            tuition: '76,160马币/年'
          },
        ]
      },
      {
        id: 3,
        name: '泰国西那瓦国际大学',
        region: 7,
        logo: 'https://www.hualixy.edu.cn/upload/history/UpFile/202061215480.jpg',
        photo: 'http://www.lufeiedu.com/images/ueditor/20240530/6385266304416015627333675.png',
        location: '曼谷市威帕瓦迪兰实路',
        priority: 7,
        introduction: '西那瓦大学，1996年建校，位于泰国。学校有两所校区，本科校区位于曼谷近郊巴通它尼府，研究生校区位于曼谷市威帕瓦迪兰实路，紧挨军人俱乐部。是一所以工商管理，影视设计和电子计算机 为主导的全英文授课的国际型大学。西那瓦大学针对全球招生，提供的课程有语言、预科、本科、研究生、博士等。西那瓦大学是泰国的一所国际大学。它是根据当前教育青年人跟上全球趋势和工作文化、思 维和做事方式迅速变化的需要而设立的。为了实现上述目标，大学重视师资的选拔，创建大学大楼、宿舍、图书馆和通讯网络，使学习设施，包括环境，能够促进学习气氛。强调生活舒适，以支持学习和自我发展。目前，该大学由30多个民族的学生和教师组成。这些差异极大地促进了不同类型的文化以及社区内哲学和思想的交流。',
        majors: [
          {
            name: '财会金融',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '市场营销',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '物流/供应链管理',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '人力资源',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '数字艺术',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '体育教育',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '工程管理',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '教育管理',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '设计艺术',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '数字动画',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '音乐教育',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '新闻传播学',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '国际贸易',
            duration: '4年',
            tuition: '698,000泰铢'
          },
          {
            name: '信息管理与信息系统',
            duration: '4年',
            tuition: '790,000泰铢'
          },
          {
            name: '新能源工程',
            duration: '4年',
            tuition: '790,000泰铢'
          },
          {
            name: '护理学',
            duration: '4年',
            tuition: '990,000泰铢'
          },
          {
            name: '公共卫生',
            duration: '4年',
            tuition: '990,000泰铢'
          },
          {
            name: '中医学',
            duration: '5年',
            tuition: '1,225,000泰铢'
          },
          {
            name: '教育学(硕士)',
            duration: '2年',
            tuition: '541,500泰铢'
          },
          {
            name: '管理学(硕士)',
            duration: '2年',
            tuition: '541,500泰铢'
          },
          {
            name: '工程管理(硕士)',
            duration: '2年',
            tuition: '591,500泰铢'
          },
          {
            name: '艺术教育(硕士)',
            duration: '2年',
            tuition: '591,500泰铢'
          },
          {
            name: '经济学(硕士)',
            duration: '2年',
            tuition: '591,500泰铢'
          },
          {
            name: '新闻传播(硕士)',
            duration: '2年',
            tuition: '591,500泰铢'
          },
          {
            name: '美术设计(硕士)',
            duration: '2年',
            tuition: '641,500泰铢'
          },
          {
            name: '心理学(硕士)',
            duration: '2年',
            tuition: '675,000泰铢'
          },
          {
            name: '养老管理(硕士)',
            duration: '2年',
            tuition: '675,000泰铢'
          },
          {
            name: '音乐教育(硕士)',
            duration: '2年',
            tuition: '690,000泰铢'
          },
          {
            name: '信息资源管理(硕士)',
            duration: '2年',
            tuition: '790,000泰铢'
          },
          {
            name: '人工智能与网络安全(硕士)',
            duration: '2年',
            tuition: '790,000泰铢'
          },
          {
            name: '教育学(博士)',
            duration: '3年',
            tuition: '1,226,000泰铢'
          },
          {
            name: '管理学(博士)',
            duration: '3年',
            tuition: '1,226,000泰铢'
          },
          {
            name: '经济学(博士)',
            duration: '3年',
            tuition: '1,226,000泰铢'
          },
          {
            name: '新闻传播(博士)',
            duration: '3年',
            tuition: '1,226,000泰铢'
          },
          {
            name: '心理学(博士)',
            duration: '3年',
            tuition: '1,350,000泰铢'
          },
          {
            name: '养老管理(博士)',
            duration: '3年',
            tuition: '1,350,000泰铢'
          },
          {
            name: '人工智能与网络安全(博士)',
            duration: '3年',
            tuition: '1,350,000泰铢'
          },
          {
            name: '美术设计(博士)',
            duration: '3年',
            tuition: '1,480,000泰铢'
          },
          {
            name: '艺术表演(博士)',
            duration: '3年',
            tuition: '1,480,000泰铢'
          },
        ]
      },
      {
        id: 4,
        name: '加西大学',
        region: 5,
        logo: 'https://ca.study.julianne-studio.com/wp-content/uploads/2022/03/University-Canada-West.jpg',
        photo: 'https://edubridge-assets.s3.ap-southeast-1.amazonaws.com/public/TVBhr305c1X4QLWjlpdRKajsTnV0Lvgse5hTa5VK.jpg',
        location: '温哥华卑诗省',
        priority: 1,
        introduction: '加西大学（UCW）是一所位于加拿大温哥华市中心的高科技创新型全日制商科大学，是第一所由不列颠哥伦比亚省高等教育部授权从事本科及研究生学位教育的高科技创新型全日制商科大学， 于2004年8月正式运营，创办人为前维多利亚大学校长Dr. David Strong。加西大学提供本科和硕士教育，致力于培养商管类人才，拥有跟随商业环境趋势的课程设置与兼顾学术造诣与商界实战经验的学者教授队伍，学校在QS Stars 2021高等教育评分中分别在教学、学生就业能力、学术发展、在线学习、社会责任和包容性方面获得了全五星的评级。 学校位列于中国教育部外国高校认证名单 ，同时是加拿大唯一一所获得ACBSP颁发的全球企业认证的私立大学。 截至2022年12月，有来自全球超110个国家的学员在加西大学就读。',
        majors: [
          {
            name: '加西大学工商管理硕士MBA',
            duration: '1年',
            tuition: '40,000加币'
          },
          {
            name: '加西大学文学副学士',
            duration: '1年',
            tuition: '40,000加币'
          },
          {
            name: '加西大学背景专升本',
            duration: '12个月',
            tuition: '40,000加币'
          },
          {
            name: '加西大学CCTB三年专本直通车',
            duration: '3年',
            tuition: '50,000加币'
          }
        ]
      },
      {
        id: 5,
        name: '加拿大尼加拉瀑布大学',
        region: 5,
        logo: 'https://strapi-assets.edvoy.com/live/images/institutions/university-of-niagara-falls-logo.svg',
        photo: 'cloud://cloud1-7goau2ke9656707c.636c-cloud1-7goau2ke9656707c-1346981458/Schools/NC_WCmain-entrance2.jpg',
        location: '加拿大安大略省',
        priority: 1,
        introduction: '加拿大的尼加拉瀑布是加拿大最著名的旅遊景點之一，新成立的加拿大尼加拉瀑布大學（The University of Niagara Falls Canada），將在該地區開設大學，提供大學和研究所課程，於 2024 年正式開學。加拿大尼加拉瀑布大學 (UNF) 位於尼加拉瀑布市中心，致力於培養學術社區，幫助畢業生為數位世界的領導能力做好準備，透過促進互動和體驗式教育的沉浸式學習環境，UNF 為提供獨特的學術旅程而感到自豪，為未來的畢業生在其所選領域取得成功做好準備。加拿大一直被認為世界上最安全的國家之一，擁有安全的政治體制和低犯罪率。作為一個中型城市的尼加拉瀑布市區，是最安全的學習目的地之一，是一個熱情友善的社區，每年接待數百萬遊客。與大多倫多地區 (GTA) 相比，在尼加拉瀑布大學學習，有著較低的生活成本，均衡負擔能力與生活品質，可同時追求學術與節省經濟開銷，有較低的租房價格，以及休閒生活或交通開銷，同樣可以享受充滿活力的生活方式。加拿大尼加拉瀑布大學 (UNF) 符合加拿大簽證處規定，學習期間有工作機會，每週20小時，獲得寶貴的工作經驗，作為學生未來職業生涯的墊腳石。畢業後，符合資格的國際學生，通過申請畢業後工作簽證（PGWP），可以在加拿大繼續追求工作機會。',
        majors: [
          {
            name: '数字媒体硕士',
            duration: '1年',
            tuition: '39,375加币'
          },
          {
            name: '数据分析硕士',
            duration: '1年',
            tuition: '48,000加币'
          },
          {
            name: '管理硕士',
            duration: '1年',
            tuition: '42,750加币'
          },
          {
            name: '工商管理荣誉学士',
            duration: '3年',
            tuition: '80,040加币'
          },
          {
            name: '生物医学荣誉理学学士',
            duration: '4年',
            tuition: '120,000加币'
          }
        ]
      },
      {
        id: 6,
        name: '新加坡ERC创业管理学院',
        region: 4,
        logo: 'http://m.ercchina.cn/erc/about.jpg',
        photo: 'https://s2.51offer.com/school/2016-05-19/img201601051455530.JPG',
        location: '新加坡',
        priority: 1,
        introduction: 'ERC创业管理学院成立于2003年，是经新加坡教育部注册并得到认可的一所享誉盛名的高等教育学府。在政府的大力支持下，学院由一群亚洲当代杰出的商界领袖共同创办，拥有新加坡私立教育理事会颁发的EduTrust正式四年认证，并且是新加坡唯一获得Service Class 素质服务奖的私立院校。我院拥有完善的教学设备和实力雄厚的师资力量，目前在校师生5000多人，其中60%为新加坡本地学生，13%为中国学生。校园建有先进的高科技会议室、多媒体教室、电脑室、图书馆、学生餐厅、足球场、篮球场、休闲娱乐中心等，并时常举办区域高水平的专业研讨会，为在校学生提供优质的学术资源，专业的师资力量和良好的学习氛围。ERC创业管理学院的母公司ERC集团在2010年以4600万新元价格成功收购位于武吉士（Bugis)商业中心的NorthBridge Commercial Complex；2011年，又以1亿300万新元价格成功收购Prime Centre，建造属于自己集团的高端商务酒店；2012年，出资6000万新币的价格成功收购了美国芝加哥大学在新加坡市中心的校区。以不同的形式，在不远的将来为我院提供各方面的支持，为学生今后的发展奠定了良好的基础。ERC创业管理学院的课程内容涵盖面广、实用性强，在最有就业前景的创业、金融、旅游与酒店等行业都开有相关的课程。学院与英国格林威治Greenwich 大学及英国伍尔弗汉普顿Wolverhampton 大学合作，设有本科和研究生众多专业的相关课程。此外，ERC学院还根据目前市场的需求形势，以及自身独有的特点制定出了实践与实用、商业与创业相结合的方针，开设了特色的增值课程。我院定期举办区域内CEO论坛，并优先给予本校学生免费参加的机会，让学生们有机会与商界和企业界的杰出企业家、成功人士、CEO们一起分享多年的创业成功经历以及创办和管理公司企业的相关经历与经验，从中获得在课堂上所学不到的知识，以了解当代企业创业实践的基本理念，如带领学生去Fuji Xerox 企业参观，为今后踏入社会作好了先期准备；我院还鼓励学生参加一些由企业家或者政府举办的公益活动，如保护环境、协助老人及儿童等公益活动，从中让学生们了解到无论是企业家还是个人在获得成功的同时，也不能忘记回馈与回报社会，关心那些比我们更有需要的人。通过这些活动的开展，我院让学生们在获得理论知识的同时，走出课堂，积极贴近社会、了解社会、关心社会。此外，我院还开展了企业参观、第二外语课程、红酒品鉴、商务礼仪与着装、开发创造力、财务知识、高尔夫、急救培训等增值课程，让学生们增长了知识，开阔了眼界，得到了启发，受到在校学生们的欢迎。未来，我院还会在商业市场的各个领域开设更广泛实用的相关课程，让国际学生能更快地融入新加坡社会团体，也使毕业班的学生们在毕业前就能获得社会最前沿的信息动态，掌握就业竞争先机，创造更广阔的创业、就业平台。',
        majors: [
          {
            name: '商务管理预科',
            duration: '12个月',
            tuition: '10,000新币'
          },
          {
            name: '创业设计大专',
            duration: '6个月',
            tuition: '5,000新币'
          },
          {
            name: '国际商务管理',
            duration: '18个月',
            tuition: '18,000新币'
          },
          {
            name: '迪肯大学人工智能',
            duration: '36个月',
            tuition: '45,000新币'
          },
          {
            name: '迪肯大学网络安全',
              duration: '36个月',
              tuition: '45,000新币'
          },
          {
            name: '迪肯大学计算机科学',
            duration: '36个月',
            tuition: '45,000新币'
          },
          {
            name: '迪肯大学数据科学',
            duration: '36个月',
            tuition: '45,000新币'
          },
          {
            name: '高级工商管理硕士',
            duration: '12个月',
            tuition: '22,100新币'
          },
          {
            name: '国际商务理学硕士',
            duration: '12个月',
            tuition: '22,100新币'
          },
        ]
      },
      {
        id: 7,
        name: '新加坡莎顿国际学院',
        region: 4,
        logo: 'http://www.shelton-sg.com/wp-content/uploads/2021/05/12-1.png',
        photo: 'https://img.91goodschool.com/UpFiles/ag/7772/2020/202012/21/092050199579.jpg',
        location: '新加坡',
        priority: 1,
        introduction: '莎顿国际学院（Shelton College International） 成立于1993年，拥有30多年的卓越办学历史。学院与多所英国顶尖公立大学建立了国际文凭合作伙伴关系，其中包括英国桑德兰大学 （The Universityof Sunderland）。作为一所研究型公立大学，桑德兰大学在2025年《卫报》大学排名中，综合排名英国第33名。学生在莎顿国际学院完成相关课程后，将由英国桑德兰大学颁发受国际认可的学位证书。莎顿国际学院是首批获得新加坡教育主管部门颁发的4年级别EduTrust教育信托认证的院校，并连续四次获得此珠荣。学院颁发的文凭受新加坡人力部（MOM）的认可，所授予学历学位受中国教育部留学服务中心的学历认证。',
        majors: [
          {
            name: '预科课程',
            duration: '12个月',
            tuition: '16,934新币'
          },
          {
            name: '电影制作与数字媒体',
            duration: '24个月',
            tuition: '50,6415新币'
          },
          {
            name: '创意艺术设计与媒体',
            duration: '36个月',
            tuition: '79,840新币'
          },
          {
            name: '主持及戏剧表演',
            duration: '36个月',
            tuition: '80,850新币'
          },
          {
            name: '工商管理',
              duration: '36个月',
              tuition: '61,260新币'
          },
          {
            name: '媒体制作（研究生）',
            duration: '12个月',
            tuition: '31,860新币'
          },
        ]
      },
      {
        id: 8,
        name: '英国伦敦城市大学（新加坡）',
        region: 4,
        logo: 'https://www.hualixy.edu.cn/upload/history/upfile/20216415210.png',
        photo: 'https://www.mbaxm.com/static/upload/image/20230913/1694588333172890.jpg',
        location: '新加坡',
        priority: 1,
        introduction: '伦敦城市大学(London Metropolitan University)英文缩写LondonMet，是英国伦敦的一所公立研究型大学。这所大学在伦敦金融城和伊斯灵顿的伦敦自治区设有校园、博物馆、档案馆和图书馆；特别收藏包括TUC图书馆，爱尔兰研究收集和弗雷德里克·帕克集合。伦敦城市大学有着160多年的悠久历史，其教育历史可追溯至1848年。是全英国第三大、伦敦地区最大的综合性国立大学。伦敦城市大学对教学质量的关注在教学中名列前茅。拥有全世界“超级科学实验室”和伦敦科技类专业核心研发地带“科技硅谷”多媒体教学楼和艺术家驻地基地都在伦敦城市大学旗下，只为给社会和学生带来更多的就业和实践机会。新加坡斯坦福特学院(StanfortAcademy)已成功注册到私立教育理事会颁发的强制性强化注册架构，并且有EduTrust和ISO9001:2000的资格证书。在2018年，该学院获得由新加坡私立教育理事会颁发的四年期EduTrust教育信托认证。该学院课程资源完善，专业课程均由新加坡教育专家精心设计，由资深教师辅导，帮助学生达到学习目标。',
        majors: [
          {
            name: '管理学学习与研究',
            duration: '12个月',
            tuition: '22,000新币'
          },
          {
            name: '管理会计与财务',
            duration: '12个月',
            tuition: '22,000新币'
          },
          {
            name: '领导力与战略管理',
            duration: '12个月',
            tuition: '22,000新币'
          },
          {
            name: '人员与组织',
            duration: '12个月',
            tuition: '22,000新币'
          },
          {
            name: '市场营销',
              duration: '12个月',
            tuition: '22,000新币'
          },
          {
            name: '创新管理',
            duration: '12个月',
            tuition: '22,000新币'
          },
          {
            name: '领导力提升与管理效率',
            duration: '12个月',
            tuition: '22,000新币'
          },
          {
            name: '商业研究项目',
            duration: '12个月',
            tuition: '22,000新币'
          },
          {
            name: '旅游管理',
            duration: '36个月',
            tuition: '28,500新币'
          },
          {
            name: '商业管理',
            duration: '336个月',
            tuition: '40,300新币'
          },
        ]
      },
      {
        id: 9,
        name: '英国德欧中学',
        region: 2,
        logo: 'http://www.jdconsultant.cn/ueditor/php/upload/image/20231009/1696821872102148.png',
        photo: 'http://www.jdconsultant.cn/m/i/img/show7.jpg',
        location: '英国牛津',
        priority: 1,
        introduction: '德欧中学是英国牛津一所顶尖的独立走读和寄宿学校，学生年纪在11-18岁之间， 分为三个部分：7-11年级、国际部、Sixth Form 学院。这是一个由来自世界各地的学生组成的大家庭，学生来自全球47个国家和地区，50%英国本地生，在校生约725人。学校位于牛津大学城的中心，这意味着学生可以使用牛津大学的体育设施，甚至是在牛津大学听课。学校的设施十分齐备，有先进的科学实验室，2个大型的自习室，一个参考书图书馆和职业图书馆，2个资讯科技室，内有先进的电脑并提供最新的知识。课外活动方面，学校新落成的一座美术设计中心，提供各种艺术所需的设备，如陶瓷、绘画等。运动方面有足球、篮球、排球等。学校还设立了多种奖学金，鼓励成绩优秀而有贡献于学校的学生。',
        majors: [
          {
            name: 'Discovery（13周岁）',
            duration: '12个月',
            tuition: '12,805英镑'
          },
          {
            name: 'IGCSE（14周岁）',
            duration: '24个月',
            tuition: '26,100英镑'
          },
          {
            name: 'IGCSE（15周岁）',
            duration: '12个月',
            tuition: '13,900英镑'
          },
          {
            name: 'A- level（16周岁）',
            duration: '12个月',
            tuition: '11,385新币'
          },
        ]
      },
      {
        id: 10,
        name: '牛津国际高中',
        region: 2,
        logo: 'https://picx.zhimg.com/v2-b79d79b8d0c13317ec79e2a73789e561_1440w.jpg',
        photo: 'https://image.hkhl.hk/f/1024p0/0x0/100/none/1d32e011c0a3a817f69b4d51ece0a7dc/2024-02/OICWavy_Gate0204a_7oic_5050.jpg',
        location: '英国牛津',
        priority: 1,
        introduction: '英国私校牛津国际高中Oxford International College，是一所位于 Oxford 市区的国际预科书院，成绩优异，并且以帮助学生晋身顶尖学府为目标而设有完善的学习配套。 学校过去数年的公开考试成绩理想，2018 年的英国高考（A-levels）成绩更是英国私立学校里第五佳的。 Oxford International College 深信学生需要在学业成绩、职业准备和个人发展三方面都获得好的支持和裁培，才能成为一位优秀学生，并有能力应付未来在学业和人生路上的挑战。 Oxford International College 在 2019 年正式加入办学机构 Oxford International Education Group （OIEG），成为 OIEG 在牛津的三所预科书院之一。牛津国际高中是一所位于英国牛津市中心的私立学院。 热衷于为学生提供各种辅助技能和工具，并有助于在领导力，团队合作和个人效率方面建立个性和韧性。 提供一系列小组或单独授课的课程，制定最高标准学习课程包括A-level和GCSE课程，教学质量，教牧关怀和寄宿设施。',
        majors: [
          {
            name: 'GCSE（15-19周岁）',
            duration: '12个月',
            tuition: '35,075英镑/年'
          },
          {
            name: 'A- level（16周岁）',
            duration: '24个月',
            tuition: '33,637.5英镑/年'
          },
        ]
      },
      {
        id: 11,
        name: '英国牛津布莱顿中学',
        region: 2,
        logo: 'http://www.jdconsultant.cn/ueditor/php/upload/image/20190226/1551152695572592.png',
        photo: 'http://www.jdconsultant.cn/uploads/allimg/170612/1-1F6121545161P.jpg',
        location: '英国牛津',
        priority: 1,
        introduction: '英国私校牛津国际高中Oxford International College，是一所位于 Oxford 市区的国际预科书院，成绩优异，并且以帮助学生晋身顶尖学府为目标而设有完善的学习配套。 学校过去数年的公开考试成绩理想，2018 年的英国高考（A-levels）成绩更是英国私立学校里第五佳的。 Oxford International College 深信学生需要在学业成绩、职业准备和个人发展三方面都获得好的支持和裁培，才能成为一位优秀学生，并有能力应付未来在学业和人生路上的挑战。 Oxford International College 在 2019 年正式加入办学机构 Oxford International Education Group （OIEG），成为 OIEG 在牛津的三所预科书院之一。牛津国际高中是一所位于英国牛津市中心的私立学院。 热衷于为学生提供各种辅助技能和工具，并有助于在领导力，团队合作和个人效率方面建立个性和韧性。 提供一系列小组或单独授课的课程，制定最高标准学习课程包括A-level和GCSE课程，教学质量，教牧关怀和寄宿设施。',
        majors: [
          {
            name: 'Pre-GCSE（13-15周岁）',
            duration: '36个月',
            tuition: '32,027英镑/年'
          },
          {
            name: 'GCSE（13-16周岁）',
            duration: '24个月',
            tuition: '32,602英镑/年'
          },
          {
            name: 'A- level（16-19周岁）',
            duration: '24个月',
            tuition: '33,292英镑/年'
          },
        ]
      },
      {
        id: 12,
        name: '牛津学院',
        region: 2,
        logo: 'https://i0.wp.com/fitzgabrielsschools.com/wp-content/uploads/2023/10/OXFORD-SIXTH-FORM-COLLEGE-LOGO.png?resize=100%2C100&ssl=1',
        photo: 'https://bues.my.salesforce-sites.com/servlet/servlet.FileDownload?file=00PA7000001ABsvMAG',
        location: '英国牛津',
        priority: 1,
        introduction: 'Oxford Sixth Form College（前稱 Oxford Tutorial College）是一所位於牛津市中心的私立預科書院，校舍位處牛津大學學院群之中，主要提供英國高考（一年制及兩年制），另亦設有一年制會考（1-Year GCSE）課程。與不少位於牛津、劍橋的預科書院一樣，Oxford Sixth Form College 在 1988 年成立之初為一所補習學校，以小組、個人教學模式為主，至今仍有為當地學生提供個人補習服務。在這樣的背景下，Oxford Sixth Form College 的常規課程亦以導修、補習班模式授課，高考班別平均僅四人一班（最多六人一班），並會定期安排學生與個人導師會面，檢視學習進度。在這樣貼身、個人化的教學環境下，Oxford Sixth Form College 畢業生當中不乏成績優異、於高考取得 AAA 或更佳成績的優異生，常見大學選擇包括 UCL、University of Manchester、University of Warwick、Queen Mary 等。',
        majors: [
          {
            name: 'GCSE（15-16周岁）',
            duration: '12个月',
            tuition: '11,494.25英镑/年'
          },
          {
            name: 'Pre A-Level（15-17周岁）',
            duration: '24个月',
            tuition: '11,494.25英镑/年'
          },
          {
            name: 'BTEC 商科（16-19周岁）',
            duration: '24个月',
            tuition: '11,494.25英镑/年'
          },
          {
            name: 'A-Level（16-19周岁）',
            duration: '24个月',
            tuition: '11,494.25英镑/年'
          },
          {
            name: '插班课程',
            duration: '12个月',
            tuition: '21,263.50英镑/年'
          },
        ]
      },
      
    ]
  }
  
  module.exports = schoolsData 