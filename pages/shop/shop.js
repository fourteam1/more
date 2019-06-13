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
        // console.log(res.data.goods_list);
        let list = res.data.goods_list;
        list = list.splice(0,3);
        list.forEach( item => {
          item.count = 1;
          item.check = false;
        })
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
    let index = e.currentTarget.dataset.index;
    let list = this.data.data;
    // console.log(list)
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
      TotalCost += item.market_price * item.count
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
    let index = e.currentTarget.dataset.index;
    let list = this.data.data;
    list[index].count = 0;
    list.splice(index,1);
    if(list.length == 0) {
      this.setData({
        check: false
      })
    }
    this.setData({
      data: list
    })
    this.filter(list)
  },
  











  //模态框
  onClose(e){
    this.setData({ 
      show: false
    })
  },
  //去结算
  Settlement(e){
    this.setData({
      show: true
    })
  }
})