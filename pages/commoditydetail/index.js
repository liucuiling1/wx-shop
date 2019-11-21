// pages/concern/index.js
Page({
  data: {

  },
  onLoad: function (options) {
    var name=options.name;
    console.log(name);
    wx.setNavigationBarTitle({
      title: name
    })
  },
})