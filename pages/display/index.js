// pages/display/index.js
var tempFilePaths = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,

  },
  onLoad: function(options) {
    var that = this;

    wx.getSystemInfo({
      success: function(res) {
        var image_height = res.windowHeight * 0.67
        that.setData({
          image_height: image_height
        })
      }
    })

  },
  // 上传图片事件
  upimg: function(e) {
    var that = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        // wx.showLoading({
        //   icon: "loading",
        //   title: "正在上传..."
        // });
        tempFilePaths.push(res.tempFilePaths)
        console.log(tempFilePaths);
        that.setData({
          'tempFilePaths': tempFilePaths
        })
        var num = tempFilePaths.length;
        that.setData({
          'num': num
        })
        if (num >= 9) {
          that.setData({
            show: true
          })
        } else {
          that.setData({
            show: false
          })
        }
      }
    })
  },
})