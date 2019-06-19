// pages/order/order.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    TotalCost: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getdata();
  },
  getdata() {
    let data = wx.getStorageSync("data");
    let list =  data.data.filter(item => {
      return item.check == true
    });
    console.log(list)
    this.setData({
      data: list,
      TotalCost: data.TotalCost
    })
  }
})