// pages/order/order.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    data: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
<<<<<<< HEAD
  onLoad: function (options) {
    this.getdata();
  },
  getdata(){
=======
  onLoad: function(options) {
    this.getdata();
  },
  getdata() {
>>>>>>> b033ac3b477e918b5ebc9d1ff4848ef145c8eaf9
    let data = wx.getStorageSync("data");
    console.log(data)
  }
})