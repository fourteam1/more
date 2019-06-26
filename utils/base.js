<<<<<<< HEAD
import { Config } from "./config.js"
class Base {
  constructor() {
    this.baseRestUrl = Config.restUrl;
  }
  request(params) {
    var url = this.baseRestUrl + params.url;
    console.log(url);
    if (!params.type) {
      params.type = "get"
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        'content-type': 'application/json'
      },
      success: res => {
=======
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
>>>>>>> 463264ff720a733f4001cae354105a226b332d9a
        if (params.scallBack) {
          params.scallBack(res.data)
        }
      },
<<<<<<< HEAD
      fail: err => {
=======
      fail:err=>{
>>>>>>> 463264ff720a733f4001cae354105a226b332d9a
        console.log(err);
      }
    })
  }
}
<<<<<<< HEAD
export { Base }
=======
export {Base}
>>>>>>> 463264ff720a733f4001cae354105a226b332d9a
