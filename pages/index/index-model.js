<<<<<<< HEAD
import { Base } from "../../utils/base.js"
class Home extends Base {
  constructor() {
    super()
  }
  getIndex(id, callBack) {
    var params = {
      url: "index",
      scallBack: res => {
=======
import {Base} from "../../utils/base.js"
class Home extends Base{
  constructor(){
    super()
  }
  getIndex(id,callBack){
    var params={
      url:"index",
      scallBack:res=>{
>>>>>>> 463264ff720a733f4001cae354105a226b332d9a
        callBack && callBack(res)
      }
    }
    this.request(params)
  }
<<<<<<< HEAD
  getDetails(id, callBack) {
    var params = {
      url: `detail/${id}`,
      scallBack: res => {
=======
  getDetails(id,callBack){
    var params={
      url:`detail/${id}`,
      scallBack:res=>{
>>>>>>> 463264ff720a733f4001cae354105a226b332d9a
        callBack && callBack(res)
      }
    }
    this.request(params)
  }

}
<<<<<<< HEAD
export { Home }
=======
export {Home}
>>>>>>> 463264ff720a733f4001cae354105a226b332d9a
