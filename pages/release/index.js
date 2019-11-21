// pages/concern/index.js
Page({
  data: {
    items: ['全部', '商品', '招聘', '租赁', '二手', '快报', '活动'],
    array: ['商品', '招聘', '租赁', '二手', '快报', '活动'],
    selected: 0,
    index: 0,
    start: false

  },
  onLoad: function() {

  },
  categoryId: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.setData({
      'selected': index,
    });
  },
  //普通选择器：
  bindPickerChange: function(e) {
    var that = this;
    wx.navigateTo({
      url: '/pages/editor/index',
    })
    // this.setData({
    //   index: e.detail.value
    // })
  },
})