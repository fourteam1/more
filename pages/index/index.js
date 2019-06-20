//index.js
import {Config} from '../../utils/config.js';
import {Home} from "./index-model.js"
let home =new Home();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    carousel:[],//首页轮播
    recommend:[],//推荐商品
    ranking:[],//排行榜
    guessgoods:[],//猜你喜欢
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '首页',
    })
    this.getData()
  },
  getData() {
    // http://mobile.yangkeduo.com/proxy/api/api/alexa/v1/goods?&page=1&size=20
    // 获取接口的函数
    home.getIndex(72,res=>{
      // 轮播数据
      this.setData({carousel: res.data.carousel})
      // 推荐数据
      this.setData({recommend: res.data.recommend})
      // 排行榜数据
      this.setData({ranking: res.data.ranking})
      // 猜你喜欢数据
      this.setData({guessgoods: res.data.guessgoods})

      console.log(this.data.ranking);
      console.log(this.data.guessgoods);
      console.log(this.data.carousel);
    })
  },
  goto(){
    wx.navigateTo({//跳转到详情页
      url: '../details/details'
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
