export default class MPromise {
  constructor(handle){
    this["[[PromiseState]]"]="pending"
    this["[[PromiseResult]]"]=undefined
    // handle(val=>{
    //   this["[[PromiseState]]"]="fulfilled"
    //  this["[[PromiseResult]]"]=val
    // },err=>{
    //   this["[[PromiseState]]"]="rejected"
    //   this["[[PromiseResult]]"]=err
    // })
    handle(this._resolveFn.bind(this),this._rejectFn.bind(this))
  }
  _resolveFn(val){
    console.log(this)
    this["[[PromiseState]]"]="fulfilled"
    this["[[PromiseResult]]"]=val
  }
  _rejectFn(err){
    this["[[PromiseState]]"]="rejected"
    this["[[PromiseResult]]"]=err
  }
}