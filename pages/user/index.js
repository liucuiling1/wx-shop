Page({
  data: {
    items: [{
        icon: '../../assets/images/wode_fabu@2x.png',
        text: '我发布的',
        path: '/pages/release/index'
      },
      {
        icon: '../../assets/images/wode_shoucang@2x.png',
        text: '收藏',
        path: '/pages/collection/index'
      },
      {
        icon: '../../assets/images/wode_bangzhu@2x.png',
        text: '帮助与反馈',
        path: '/pages/review/index'
      },
      {
        icon: '../../assets/images/wode_shezhi@2x.png',
        text: '设置',
        path: '/pages/setup/index'
      },

    ],
    showModalStatus: true,
    headimgurl: '../../assets/images/morentouxiang@2x.png'
  },
  onLoad: function() {
    var that = this;
    that.setData({
      headimgurl: that.data.headimgurl,
    })
  },
  // 禁止遮罩层穿透
  preventTouchMove: function(e) {
    return;
  },
  showModal: function() {
    // 显示遮罩层
    this.setData({
      showModalStatus: true
    })
  },
  hideModal: function() {
    // 隐藏遮罩层
    this.setData({
      showModalStatus: false
    })
  },
  register: function() {
    wx.navigateTo({
      url: '../register/index'
    })
  },
  editpwd: function() {
    wx.navigateTo({
      url: '../forgetpwd/index'
    })
  },
  scanCode: function() {
    wx: wx.scanCode({
      onlyFromCamera: true,
      scanType: [],
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  personal: function() {
    wx.navigateTo({
      url: '../personal/index'
    })
  },
  setPhotoInfo: function() {
    var that = this;
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res) {
        var avatar = res.tempFilePaths;
        that.setData({
          headimgurl: avatar,
        })
      }
    })
  }
})