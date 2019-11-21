Page({

  data: {
    showModalStatus: false,
    list: [{
        "number": "12",
        "money": "2888"
      },
      {
        "number": "3",
        "money": "788"
      },
      {
        "number": "1",
        "money": "288"
      },
    ],
    listtwo: [{
        "number": "12",
        "money": "3888"
      },
      {
        "number": "3",
        "money": "1088"
      },
      {
        "number": "1",
        "money": "388"
      },
    ],
    listthree: [{
        "number": "12",
        "money": "5888"
      },
      {
        "number": "3",
        "money": "1688"
      },
      {
        "number": "1",
        "money": "588"
      },
    ],
    selected: 2

  },

  onLoad: function(options) {

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
  getmore: function() {
    var that = this;

    this.setData({
      showModalStatus: true,
      listitems: this.data.list,
      namevip: "VIP"
    })
  },
  getmoretwo: function() {
    var that = this;

    this.setData({
      showModalStatus: true,
      listitems: this.data.listtwo,
      namevip: "钻石VIP"

    })
  },
  getmorethree: function() {
    var that = this;

    this.setData({
      showModalStatus: true,
      listitems: this.data.listthree,
      namevip: "至尊VIP"

    })
  },
  getone: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.setData({
      'selected': index,
    });
  },
  getcolse: function() {
    this.setData({
      showModalStatus: false
    })
  }

})