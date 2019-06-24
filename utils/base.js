import {Config} from "./config.js"
class Base{
  constructor(){
    this.baseRestUrl=Config.restUrl;
  }
  request(params){
    var url = this.baseRestUrl + params.url;
    console.log(url);
    if (!params.type){
      params.type="get"
    }
    wx.request({
      url: url,
      data:params.data,
      method:params.type,
      header:{
        'content-type':'application/json'
      },
      success:res=>{
        if (params.scallBack) {
          params.scallBack(res.data)
        }
      },
      fail:err=>{
        console.log(err);
      }
    })
  }
}
export {Base}