// pages/details/details.js

import { Config } from '../../utils/config.js';
import { Home } from "../index/index-model.js"
let home = new Home();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconSize: [20],
    iconColor: [
      'red'
    ],
    iconType: [
      'success' 
    ],
    show:false,
    id:'',
    goods:[],//获取详情数据
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      id: options.id
    })
    wx.setNavigationBarTitle({
      title: '浏览记录',
    })
    this.getData()
  },
  getData() {
    home.getDetails(this.data.id, res => {
      console.log(res.data);
      this.setData({
        goods:res.data.goods
      });
      console.log(this.data.goods);
    })
  },
  onClose() {
    this.setData({ show: false });
  },
  close(){
    show: false
  },
  goblack(){
    wx.navigateBack({
      delta: 1
    })
  },
  onClose() {
    this.setData({ show: false });
  },
  isShow(){
    this.setData({
      show:!this.data.show
    })
  },
  getShow(){
    this.setData({
      show:!this.data.show
    })
  },
  goIsshow() {
    this.setData({
      show: !this.data.show
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