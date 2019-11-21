Page({
  data: {
    items: ['../../assets/images/banner.png', '../../assets/images/banner.png', '../../assets/images/banner.png'],
    certlist: [{
        "icon": '../../assets/images/shouye_shangcheng@2x.png',
        "name": "商品",
        "path": '/pages/commodity/index'
      },
      {
        "icon": '../../assets/images/shouye_ershou@2x.png',
        "name": "二手",
        "path": '/pages/fleamarket/index'

      },
      {
        "icon": '../../assets/images/shouye_zulin@2x.png',
        "name": "租赁",
        "path": '/pages/lease/index'

      },
      {
        "icon": '../../assets/images/shouye_zhaopin@2x.png',
        "name": "招聘",
        "path": '/pages/recruit/index'

      },
      {
        "icon": '../../assets/images/shouye_huodong@2x.png',
        "name": "活动",
        "path": '/pages/activity/index'

      }
    ],
    recentOrder: ['北京发布今冬首个低温蓝色预警', '北京市气象台12月6日10时30分发布', '最低气温将下降至零下10℃左右'],
    shopitems: [{
        "pictureUrl": '',
        "name": "纯棉T恤",
        "content": "HAPPLY旗舰店"
      },
      {
        "pictureUrl": '',
        "name": "纯棉T恤",
        "content": "HAPPLY旗舰店"
      },

      {
        "pictureUrl": '',
        "name": "纯棉T恤",
        "content": "HAPPLY旗舰店"
      },
      {
        "pictureUrl": '',
        "name": "纯棉T恤",
        "content": "HAPPLY旗舰店"
      },
      {
        "pictureUrl": '',
        "name": "纯棉T恤",
        "content": "HAPPLY旗舰店"
      },
      {
        "pictureUrl": '',
        "name": "纯棉T恤",
        "content": "HAPPLY旗舰店"
      },
    ]
  },
  onLoad: function() {
    var that = this;
    //宽高
    wx.getSystemInfo({
      success: function(res) {
        var image_height = res.windowWidth * 0.5;
        that.setData({
          image_height: image_height
        })
        var second_height = image_height + 77;
        that.setData({
          second_height: second_height
        })
      }
    })

  },
  getsearch: function() {
    wx.navigateTo({
      url: '/pages/search/index',
    })
  }
})