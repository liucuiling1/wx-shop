// pages/commodity/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        'head': '广告位招租',
        'row': [{
          'name': '广告位招租',
          'picture': ''

        }, ]
      },
      {
        'head': '互联网广告',
        'row': [{
            'name': '朋友圈广告',
            'picture': ''
          },
          {
            'name': '红包广告',
            'picture': ''
          },
          {
            'name': '广告群发',
            'picture': ''
          },
          {
            'name': '微信植入广告',
            'picture': ''
          },
          {
            'name': '网站建设',
            'picture': ''
          },
          {
            'name': '小程序制作',
            'picture': ''
          },
          {
            'name': '其他',
            'picture': ''
          },
        ]
      },
      {
        'head': '精品字业',
        'row': [{
          'name': '精品字业',
          'picture': ''
        }, ]
      },
      {
        'head': '标识标牌',
        'row': [{
            'name': '标牌系列',
            'picture': ''
          },
          {
            'name': '标识系统',
            'picture': ''
          },
          {
            'name': '其他',
            'picture': ''
          },
        ]
      },
      {
        'head': '印刷包装',
        'row': [{
            'name': '纸品区',
            'picture': ''
          },
          {
            'name': '特种印刷',
            'picture': ''
          },
          {
            'name': '个性印刷',
            'picture': ''
          },
          {
            'name': '数码印刷',
            'picture': ''
          },
          {
            'name': '包装区域',
            'picture': ''
          },
          {
            'name': 'PVC',
            'picture': ''
          },
          {
            'name': '区域',
            'picture': ''
          },
          {
            'name': '其他',
            'picture': ''
          },
        ]
      }
    ]
  },

  onLoad: function(options) {

  },
  getdetail: function(e) {
    var name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../commoditydetail/index?name=' + name,
    })
  },
})