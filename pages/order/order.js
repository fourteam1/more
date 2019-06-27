// pages/order/order.js
import Dialog from 'vant-weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    TotalCost: 0,
    show: false,
<<<<<<< HEAD
    name: '',
    radio: '1',
    list: []
=======
    name: ""
>>>>>>> 440496419296b2d3dd3e72dfd54cf3b306fccdec
  },
  /**
   * 生命周期函数--监听页面加载
   */
<<<<<<< HEAD
  onLoad: function (options) {
    let order = JSON.parse(options.dataList)
    this.setData({
      list: order
    })
    console.log(this.data.list)
    wx.setNavigationBarTitle({
      title: '确认订单'
    })
    this.total();
  },
  //计算总价
  total(){
    this.data.list.forEach( item => {
      this.data.TotalCost += item.shop_price * item.count
    })
    this.setData({
      TotalCost: this.data.TotalCost
    })
    console.log(this.data.TotalCost)
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
=======
  onLoad: function(options) {
    this.getdata();
    
  },
  // 获取数据
  getdata() {
    let data = wx.getStorageSync("data");
    console.log(data.data)
    let list = data.data.filter(item => {
      return item.check == true
>>>>>>> 440496419296b2d3dd3e72dfd54cf3b306fccdec
    });
  },
  //提交订单
  popup(){
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
<<<<<<< HEAD
=======
  Settlement(){
    this.setData({
      show: !this.data.show
    })
  },
  // 模态框
  onClose(){
    this.setData({
      show: false
    })
  },
>>>>>>> 440496419296b2d3dd3e72dfd54cf3b306fccdec
  // 获取用户信息
  onGotUserInfo: function (e) {
    // console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    this.setData({
      name: e.detail.userInfo.nickName
    })
    // console.log(e.detail.rawData)
  },
<<<<<<< HEAD
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
=======
  // 确认支付
  confirm(){
    Dialog.confirm({
      title: '确认支付',
      message: '是否确认支付'
    }).then(() => {
      console.log(1)
      // wx.navigateTo({
      //   url: ""
      // })
    }).catch(() => {
      // on cancel
      console.log(2)
    });
  },
>>>>>>> 440496419296b2d3dd3e72dfd54cf3b306fccdec
})