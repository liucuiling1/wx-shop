const App = getApp();
var tempFilePaths = [];
Page({
  data: {
    items: [],
    img_arr: [],
    show: false,
  },

  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        var image_width = res.windowWidth * 0.21
        that.setData({
          image_width: image_width
        })
        var change_width = res.windowWidth * 0.2;
        that.setData({
          change_width: change_width
        })
      }
    })
  },
  // 上传图片事件
  upimg: function(e) {
    var that = this;
    wx.chooseImage({
      count: 4,
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
        if (num >= 4) {
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
  deleteImg: function(e) {
    var that = this;
    var shopindex = e.currentTarget.dataset.shopindex;
    var img_arr = that.data.items[shopindex].subpictureUrl;
    var index = e.currentTarget.dataset.index;
    var pictureUrl = img_arr[index];
    img_arr.splice(index, 1);
    that.setData({
      'items': that.data.items
    })
    var num = img_arr.length;
    if (num >= 8) {
      that.setData({
        show: true
      })
    } else {
      that.setData({
        show: false
      })
    }

    wx.showLoading();
    var paramlist = {
      "pictureUrl": pictureUrl,
    };
    var json = {
      "cmd": "select",
      "dat": paramlist,
      "tok": token,
      "ver": "1",
      "src": "3"
    };
    var jsonStr = JSON.stringify(json);

    wx.request({
      url: App.globalData.serverpath + "deletePicture",
      data: jsonStr,
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function(res) {
        if (res.data.ret == 10000) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success'
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            image: '../../assets/images/danger.png',
          })
        }
      },
      fail: function(res) {
        wx.showToast({
          title: '获取订单失败',
          image: '../../assets/images/danger.png',
        })
      },
      complete: function() {
        wx.hideLoading();
        wx.stopPullDownRefresh();
      }
    })
  },

})