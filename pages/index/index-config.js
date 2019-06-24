import { Base } from "../../utils/base.js"
class Home extends Base {
  constructor() {
    super()
  }
  getIndex(id, callBack) {
    var params = {
      url: "index",
      scallBack: res => {
        callBack && callBack(res)
      }
    }
    this.request(params)
  }
  getDetails(id, callBack) {
    var params = {
      url: `detail/${id}`,
      scallBack: res => {
        callBack && callBack(res)
      }
    }
    this.request(params)
  }

}
export { Home }
// import { Base } from "../../utils/base.js"

// class Home extends Base{
//   constructor(){
//     super()
//   }
//   getGoods(id, callBack){
//     var proms={
//       url:"goods",
//       scallBack:res=>{
//         callBack && callBack(res)
//       }
//     }
//     this.request(proms);
//   }
// }
// export { Home }