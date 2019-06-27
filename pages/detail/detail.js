// pages/detail/detail.js
import { Config } from '../../utils/config.js'
import { Home } from './detail-model.js'
var home = new Home();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[],
    show: false,
    size: ["60*40cm","58*36cm"],
    color: ["白色","红色"],
    curSize: '',
    curColor: '',
    curIndex: '',
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail(options.id);
    wx.setNavigationBarTitle({
      title: '详情页'
    })
  },
  selectSize(e){
    this.setData({
      curSize:e.currentTarget.dataset.size
    })
  },
  selectColor(e){
    this.setData({
      curColor: e.currentTarget.dataset.color
    })
  },
  //获取详情接口
  getDetail(id){
    var data = home.getGoods(id,res => {
      this.setData({
        detail: res.data.goods
      })
    })
  },
  //返回首页
  goBack(){
    wx.navigateBack({
      delta: 1
    })
  },
  //关闭模态框
  onClose() {
    this.setData({ show: false });
  },
  //弹出弹窗
  isShow(e) {
    this.setData({
      show: !this.data.show,
      curIndex: e.currentTarget.dataset.index
    })
    wx.setStorage({
      key: 'goods',
      data: {
        image: this.data.detail.goods_thumb,
        name: this.data.detail.goods_name,
        price: this.data.detail.market_price
      }
    })
  },
  //关闭弹窗
  goIsShow() {
    this.setData({
      show: !this.data.show
    })
  },
  //跳转购物车页
  goShop(e){
    //当前的尺寸
    let curs = this.data.size[this.data.curSize]
    //当前的颜色
    let curc = this.data.color[this.data.curColor]
    if(Number(this.data.curIndex)){
      if(curs && curc){
        console.log(e)
        let goodsId = e.currentTarget.dataset.id;
        let goods = this.data.detail;
        goods.check = false;
        goods.count = 1;
        let count = this.data.detail.count;
        //获取购物车里的缓存
        let arr = wx.getStorageSync('cart') || [];
        if(arr.length > 0){
          for(var i in arr){
            //判断id是否一致
            if(arr[i].goods_id == goodsId){
              arr[i].count = arr[i].count+1;
              try{
                wx.setStorageSync('cart',arr)
              }catch(err){
                console.log(err)
              }
              //添加购物车
              wx.showToast({
                title: '加入购物车成功',
                icon: 'success',
                duration: 2000
              });
              return;
            }
          }
          arr.push(goods)
        }else{
          arr.push(goods)
        }
        try{
          wx, wx.setStorageSync('cart',arr)
          wx.showToast({
            title: '加入购物车成功',
            icon: 'success',
            duration: 2000
          });
          return;
        }catch(err){
          console.log(err)
        }
      }
    }else{
      if (curs && curc) {
        this.setData({
          dataList: []
        })
        this.data.dataList.push(this.data.detail)
        console.log(this.data.detail)
        wx.navigateTo({
          url: '../order/order?dataList='+JSON.stringify(this.data.dataList)
        })
      }
    }
  }
})