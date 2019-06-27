// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    TotalCost: 0,
    show: false,
    name: '',
    radio: '1',
    list: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let order = JSON.parse(options.dataList)
    this.setData({
      list: order
    })
    wx.setNavigationBarTitle({
      title: '确认订单'
    })
    this.total();
  },
  //计算总价
  total() {
    this.data.list.forEach(item => {
      this.data.TotalCost += item.shop_price * item.count
    })
    this.setData({
      TotalCost: this.data.TotalCost
    })
  },
  onChange(event) {
    this.setData({
      radio: event.detail
    });
  },
  onClick(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name
    });
  },
  //提交订单
  popup() {
    this.setData({
      show: !this.data.show
    })
  },
  // 模态框
  onClose() {
    this.setData({
      show: false
    })
  },
  // 获取用户信息
  onGotUserInfo: function (e) {
    // console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    this.setData({
      name: e.detail.userInfo.nickName
    })
    // console.log(e.detail.rawData)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})