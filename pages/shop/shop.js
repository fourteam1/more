// pages/shop/shop.js
import { Config } from '../../utils/config.js'
import { Home } from './shop-model.js'
var home = new Home();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    check: false,
    TotalCost: 0,
    newData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车'
    })
    this.getgoods()
  },
  //获取数据
  getgoods() {
    let id = 1;
    home.getGoods(id, res => {
      let goods = res.data.guessgoods;
      goods.forEach( item => {
        item.count = 1,
        item.check = false
      })
      this.setData({
        data:goods//猜你喜欢
      })
      console.log(this.data.data)
    })
  },
  //当前选中的商品
  check(e){
    let index = e.currentTarget.dataset.index;
    let list = this.data.data;
    list[index].check = !list[index].check;
    this.filter(list)
    this.setData({
      data: list
    })
  },
  // All全部选中
  All(e) {
    let check = !this.data.check;
    let list = this.data.data;
    list.forEach(item => {
      item.check = check;
    })
    this.filter(list)
    this.setData({
      data: list
    })
  },
  // 过滤的方法
  filter(list){
    let newdata = list.filter(item => {
      return item.check == true;
    })
    let TotalCost = 0;
    newdata.forEach(item => {
      TotalCost += item.shop_price * item.count
    })
    this.setData({
      TotalCost: TotalCost
    })
    if (list.length === newdata.length) {
      this.setData({
        check: true
      })
    }else{
      this.setData({
        check: false
      })
    }
  },
  //商品+1
  add(e){
    let index = e.currentTarget.dataset.index;
    let list = this.data.data;
    list[index].count++;
    this.setData({
      data: list
    })
  },
  //商品-1
  cutBack(e){
    let index = e.currentTarget.dataset.index;
    let list = this.data.data;
    list[index].count--;
    if (list[index].count < 1){
      list[index].count = 1;
    }
    this.setData({
      data: list
    })
  },
  // 删除当前商品
  remove(e){
    wx.showModal({
      title: '提示',
      content: "确定删除吗？",
      success: res => {
        if(res.confirm){
          console.log(res.confirm)
          let index = e.currentTarget.dataset.index;
          let list = this.data.data;
          list[index].count = 0;
          list.splice(index, 1);
          this.filter(list)
          this.setData({
            data: list
          })
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 2000
          })
          if (list.length == 0) {
            this.setData({
              check: false
            })
          }
        }else if(res.cancel){
          console.log("取消")
        }
      }
    })
  },
  //去结算
  Settlement(e){
    this.setData({
      newData: []
    })
    this.data.data.forEach(item => {
      if(item.check == true){
        this.data.newData.push(item)
      }
    })
    this.setData({
      newData: this.data.newData
    })
    let TotalCost = this.data.TotalCost;
    let data = this.data.data;
    let list = {
      data,
      TotalCost
    }
    wx.navigateTo({
      url: '../order/order?dataList='+JSON.stringify(this.data.newData)
    })
  }
})