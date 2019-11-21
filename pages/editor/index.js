const App = getApp();
var tempFilePaths = [];
var list = [];
Page({
  data: {
    items: [],
    img_arr: [],
    show: false,
    multiIndex: [0, 0],
    multiArray: [
      ['广告位招租', '互联网广告', "精品字业", "标识标牌", "印刷包装"],
      ['广告位招租']
    ],
    objectMultiArray: [{
        "regid": "1",
        "parid": "1",
        "regname": "广告位招租",
        "regtype": "1",
        "ageid": "0"
      },
      {
        "regid": "2",
        "parid": "1",
        "regname": "互联网广告",
        "regtype": "1",
        "ageid": "0"
      },
      {
        "regid": "3",
        "parid": "1",
        "regname": "精品字业",
        "regtype": "1",
        "ageid": "0"
      },
      {
        "regid": "4",
        "parid": "1",
        "regname": "标识标牌",
        "regtype": "1",
        "ageid": "0"
      },
      {
        "regid": "5",
        "parid": "1",
        "regname": "印刷包装",
        "regtype": "2",
        "ageid": "0"
      },
      {
        "regid": "6",
        "parid": "1",
        "regname": "广告位招租",
        "regtype": "2",
        "ageid": "0"
      },
      {
        "regid": "7",
        "parid": "2",
        "regname": "微信植入广告",
        "regtype": "1",
        "ageid": "0"
      },
      {
        "regid": '8',
        "parid": "2",
        "regname": "朋友圈广告",
        "regtype": "1",
        "ageid": "0"
      },
      {
        "regid": "9",
        "parid": "2",
        "regname": "红包广告",
        "regtype": "2",
        "ageid": "0"
      },
      {
        "regid": "10",
        "parid": "2",
        "regname": "广告群发",
        "regtype": "2",
        "ageid": "0"
      },
      {
        "regid": "11",
        "parid": "3",
        "regname": "精品字业",
        "regtype": "2",
        "ageid": "0"
      },
      {
        "regid": "12",
        "parid": "4",
        "regname": "标牌系列",
        "regtype": "2",
        "ageid": "0"
      },
      {
        "regid": "13",
        "parid": "4",
        "regname": "标识系统",
        "regtype": "2",
        "ageid": "0"
      },
      {
        "regid": "14",
        "parid": "5",
        "regname": "纸品区",
        "regtype": "2",
        "ageid": "0"
      },
      {
        "regid": "14",
        "parid": "5",
        "regname": "特种印刷",
        "regtype": "2",
        "ageid": "0"
      },
    ],
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
  bindMultiPickerChange: function(e) {
    var that = this;

    that.setData({
      "multiIndex[0]": e.detail.value[0],
      "multiIndex[1]": e.detail.value[1]
    })
  },

  bindMultiPickerColumnChange: function(e) {
    var that = this;

    switch (e.detail.column) {
      case 0:
        list = []
        for (var i = 0; i < that.data.objectMultiArray.length; i++) {
          if (that.data.objectMultiArray[i].parid == that.data.objectMultiArray[e.detail.value].regid) {
            list.push(that.data.objectMultiArray[i].regname);
          }
        }
        that.setData({
          "multiArray[1]": list,
          "multiIndex[0]": e.detail.value,
          "multiIndex[1]": 0
        })

    }
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
  topublish: function() {
    wx.showModal({
      title: '提示',
      content: '使用该功能需要先升级会员至尊vip哦',
      confirmText: '升级',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }

})