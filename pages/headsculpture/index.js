// pages/display/index.js
var tempFilePaths = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0,
    imagePath: "../../assets/images/morentouxiang@2x.png",

  },
  onLoad: function(options) {
    var that = this;

    wx.getSystemInfo({
      success: function(res) {
        var image_height = res.windowHeight * 0.57
        that.setData({
          image_height: image_height
        })
      }
    })
  },
  previewImage: function(e) {
    var that = this;
    wx.saveImageToPhotosAlbum({
      filePath: that.data.imagePath,
      // success(res) {
      //   wx.showToast({
      //     title: '保存成功',
      //   })
      // },
      // fail(res) {
      //   wx.showToast({
      //     title: '保存失败',
      //   })
      // },
    })
  },
})