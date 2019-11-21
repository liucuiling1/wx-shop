const App = getApp();
Page({
  data: {
    categoryItems: [{
        "name": "A",
        "province": ["安徽省", "河北省"],
      },
      {
        "name": "B",
        "province": ["安徽省", "河北省"],
      },
      {
        "name": "C",
        "province": ["安徽省", "河北省"],
      },
      {
        "name": "D",
        "province": ["安徽省", "河北省"],
      },
    ]

  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        var widheight = res.windowHeight;
        var hetiht = widheight - parseFloat(90);
        var readhetiht = widheight - parseFloat(130);
        //console.log(readhetiht);
        that.setData({
          hetiht: hetiht,
          readhetiht: readhetiht,
        })
      }
    })

  },
  // ToSearch: function() {
  //   wx.navigateTo({
  //     url: '../search/index',
  //   })
  // },
  switchTab: function(e) {
    var that = this;
    var vendorindex = e.currentTarget.dataset.vendorindex;
    var index = e.currentTarget.dataset.index;
    that.setData({
      'selected': index,
      'selectedindex': vendorindex,
    });

  },
  // getcategory: function() {
  //   var that = this;
  //   wx.showLoading();
  //   var paramlist = {
  //     "parentId": 0,
  //     "categoryId": "",
  //     "kind": "1",
  //     "status": 1,
  //   };
  //   var json = {
  //     "cmd": "select",
  //     "dat": {
  //       "paramlist": paramlist,
  //       "pageindex": 1,
  //       "pagesize": 1000,
  //       "orderby": "seqIndex asc",
  //     },
  //     "tok": "",
  //     "ver": "1",
  //     "src": "3"
  //   };
  //   var jsonStr = JSON.stringify(json);
  //   wx.request({
  //     url: App.globalData.serverpath + "base/category/list",
  //     data: jsonStr,
  //     method: "POST",
  //     header: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //     success: function(res) {
  //       if (res.data.ret == 10000) {
  //         var total_all = res.data.dat.total;
  //         that.setData({
  //           "total_all": total_all
  //         })
  //         if (total_all > 0) {
  //           that.setData({
  //             "categoryItems": res.data.dat.rows
  //           })
  //           var categoryId = res.data.dat.rows[0].categoryId;
  //           that.getcategorylist(categoryId);
  //         }
  //       }
  //     },
  //     fail: function(res) {
  //       wx.showToast({
  //         title: '获取信息失败',
  //         image: '../../assets/images/danger.png',
  //       })
  //     },
  //     complete: function() {
  //       wx.hideLoading();
  //       wx.stopPullDownRefresh();
  //     }
  //   })
  // },
  // getcategorylist: function(categoryId) {
  //   var that = this;
  //   wx.showLoading();
  //   var paramlist = {
  //     "parentId": categoryId,
  //     "kind": "1",
  //     "status": "1",
  //     "province": province,
  //     "city": city,
  //   };
  //   var json = {
  //     "cmd": "select",
  //     "dat": {
  //       "paramlist": paramlist,
  //       "pageindex": 1,
  //       "pagesize": 1000,
  //       "orderby": "seqIndex asc",
  //     },
  //     "tok": "",
  //     "ver": "1",
  //     "src": "3"
  //   };
  //   var jsonStr = JSON.stringify(json);

  //   wx.request({
  //     url: App.globalData.serverpath + "base/category/listEx",
  //     data: jsonStr,
  //     method: "POST",
  //     header: {
  //       "Content-Type": "application/x-www-form-urlencoded"
  //     },
  //     success: function(res) {
  //       if (res.data.ret == 10000) {
  //         var total = res.data.dat.total;
  //         that.setData({
  //           "total": total
  //         })
  //         if (total > 0) {
  //           for (var i = 0; i < res.data.dat.rows.length; i++) {
  //             var row = res.data.dat.rows[i]
  //             if (row.icon != null && row.icon != "") {
  //               row.icon = App.getImgPath(row.icon);
  //             }
  //           }
  //           that.setData({
  //             "categoryItemsTwo": res.data.dat.rows
  //           })
  //         }
  //       }
  //     },
  //     fail: function(res) {
  //       wx.showToast({
  //         title: '获取信息失败',
  //         image: '../../assets/images/danger.png',
  //       })
  //     },
  //     complete: function() {
  //       wx.hideLoading();
  //       wx.stopPullDownRefresh();
  //     }
  //   })
  // },
  // categorydetail: function(res) {
  //   var pitem = res.currentTarget.dataset.id;
  //   wx.navigateTo({
  //     url: '../productList/index?categoryId=' + pitem.categoryId + "&title=" + pitem.category + "&certCategory=",
  //   })

  // }
})