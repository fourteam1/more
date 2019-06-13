// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    check: false,
    show: false,
    TotalCost: 0,
    check: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车',
    })
    this.getData();
  },
  //获取数据
  getData(){
    wx.request({
      url: "http://mobile.yangkeduo.com/proxy/api/api/alexa/v1/goods?list_update_time=true&platform=1&assist_allowed=1&page=1&size=20&list_id=40IGMQwe8t&antiContent=0anAfxn5ryloU9dVzi6xXe7XBEYGZ02u1eRp6zsG0p24VBvHZGpuUI6FIe94e_szamrCZNIUwuomrRnx7uxmVT9d9LTTlzjQ1gQvxZfGctxGlJYDe6LXVv1aDnbPHfnICDbTCXJwjMm9Qpp9BdGyYZt_NlYDEmkq0PPX7zp8vGGfFwM5s46ju2gHErdC2cY_0gqZw6eC56DfJeoP-bD0clVISh9lfKoVKk2UOzxbLdYYz3fE9U6vPKhnNRGnlzkKwGmU1XJqrTNLSRArAM6oqB-ugeotVl27wJm0kinAYzwZSMo2LGdDBt1v0dEDCjA8OqMqSFNsgB_ORB6ztyFM--dyC7c881nz5j51iXa5RVtMcGTTuz3bw7VKYW-crokveUvvFbRN5SYo-s8RwfrqpAp3dXZKhOrdOlDrORYGosHDKP&pdduid=0",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        console.log(res.data.goods_list);
        let list = res.data.goods_list;
        list = list.splice(0,3);
        this.setData({
          data: list
        })
      },
      fail: err => {
        console.log("错误内容 " + err);
      }
    })
  },
  //当前选中的商品
  check(e){
    // console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    let data = this.data.data;
    // data.forEach((item) => {
    // })
  },
  //模态框
  onClose(){
    this.setData({ 
      show: false
    })
  },
  //去结算
  Settlement(){
    this.setData({
      show: true
    })
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