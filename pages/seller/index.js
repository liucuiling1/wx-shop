// pages/concern/index.js
Page({
  data: {
    items: ['全部', '商品', '招聘', '租赁', '二手', '活动'],
    array: ['全部', '商品', '招聘', '租赁', '二手', '活动'],
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
  report: function() {
    wx.navigateTo({
      url: '../report/index'
    })
  },
})