// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
<<<<<<< HEAD
    check: false,
    show: false,
    TotalCost: 0,
    count: 1,
=======
    check: false
>>>>>>> 4a2231947d3138ea12928a8004c40e39b4c49d1f
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
  getData(){
    wx.request({
      url: "http://mobile.yangkeduo.com/proxy/api/api/alexa/v1/goods?list_update_time=true&platform=1&assist_allowed=1&page=1&size=20&list_id=40IGMQwe8t&antiContent=0anAfxn5ryloU9dVzi6xXe7XBEYGZ02u1eRp6zsG0p24VBvHZGpuUI6FIe94e_szamrCZNIUwuomrRnx7uxmVT9d9LTTlzjQ1gQvxZfGctxGlJYDe6LXVv1aDnbPHfnICDbTCXJwjMm9Qpp9BdGyYZt_NlYDEmkq0PPX7zp8vGGfFwM5s46ju2gHErdC2cY_0gqZw6eC56DfJeoP-bD0clVISh9lfKoVKk2UOzxbLdYYz3fE9U6vPKhnNRGnlzkKwGmU1XJqrTNLSRArAM6oqB-ugeotVl27wJm0kinAYzwZSMo2LGdDBt1v0dEDCjA8OqMqSFNsgB_ORB6ztyFM--dyC7c881nz5j51iXa5RVtMcGTTuz3bw7VKYW-crokveUvvFbRN5SYo-s8RwfrqpAp3dXZKhOrdOlDrORYGosHDKP&pdduid=0",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        // console.log(res.data.goods_list);
        let list = res.data.goods_list;
        list = list.splice(0,4);
        list.forEach(item => {
          item.count = 1;
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
<<<<<<< HEAD
  //单选框
  SingleBox(e){
    let index = e.currentTarget.dataset.index;
    let list = this.data.data;
    list[index].check = !list[index].check;
    this.Selected(list)
    this.setData({
      data: list
    })
  },
  //筛选选中的商品
  Selected(list){
    let newdata = list.filter((item) => {
      return item.check == true
    })
    if(list.length == newdata.length){
      list.forEach(item => {
        item.check = true
      })
      this.setData({
        check: true
      })
    }else{
      this.setData({
        check: false
      })
    }
    let TotalCost = 0;
    newdata.forEach(item => {
      TotalCost += item.market_price * item.count
    })
    this.setData({
      TotalCost: TotalCost
    })
  },
//全选按钮
  check(e){
    let check = this.data.check;
    check = !check
    let list = this.data.data;
    list.forEach(item => {
      item.check = check
    })
    this.setData({
      data: list,
      check: check
    })
    this.Selected(list)
=======
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

>>>>>>> 4a2231947d3138ea12928a8004c40e39b4c49d1f
  },
  //商品+1
  addtap(e){
    let list = this.data.data;
    let index = e.currentTarget.dataset.index;
    list[index].count++
    this.setData({
      data: list
    })
  },
  //商品-1
  subtracttap(e){
    let list = this.data.data;
    let index = e.currentTarget.dataset.index;
    list[index].count--;
    if (list[index].count < 1){
      list[index].count = 1
    }
    this.setData({
      data: list
    })
    
  },
  //删除商品
  remove(e){
    let index = e.currentTarget.dataset.index;
    let list = this.data.data;
    list[index].count = 0;
    this.setData({
      data: list
    })
    list.splice(index,1)
    this.setData({
      data: list
    })
    this.Selected(list)
    console.log(list.length)
    if(list.length == 0){
      this.setData({
        check: false
      })
    }
  },
  //去结算按钮
  Settlement(){
    this.setData({
      show: true
    })
  },
  //模态框
  onClose() {
    this.setData({
      show: false
    })
  },
})