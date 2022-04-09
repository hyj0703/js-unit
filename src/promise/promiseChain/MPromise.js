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
    // this.resolveArr=null //只能单一，多个会覆盖
    // this.rejectArr=null//只能单一，多个会覆盖
    this.resolveArr=[]
    this.rejectArr=[]
    handle(this._resolve.bind(this),this._reject.bind(this))
  }
  _resolve(val){
    this["[[PromiseState]]"]="fulfilled"
    this["[[PromiseResult]]"]=val
    // this.resolveArr(val)
    let item
    //Mutationobserveer 监听dom变化
    const observe = new MutationObserver(mutions=>{
      while(item=this.resolveArr.shift()){
        item&&item(val)
      }
      observe.disconnect()
    })
    //监听dom元素的属性变化
    observe.observe(document.body,{attributes:true})
    document.body.setAttribute('attr',true)
    
  }
  _reject(err){
    this["[[PromiseState]]"]="rejected"
    this["[[PromiseResult]]"]=err
    // this.rejectArr(err)
    let item
    const observe = new MutationObserver(mutions=>{
      while(item=this.rejectArr.shift()){
        item&&item(val)
      }
      observe.disconnect()
    })
    observe.observe(document.body,{attributes:true})
    document.body.setAttribute('attr',true)
  }
  then(onResolve,onReject){
    // onResolve(this["[[PromiseResult]]"]) //同步执行，缺点：异步报错
    // this.resolveArr.push(onResolve)
    // this.rejectArr.push(onReject)
    return new MPromise((resolve,reject)=>{
      const resolveFn = function(val){
        const resolveResult = onResolve(val)
        // resolve(resolveResult) 
        if(resolveResult instanceof MPromise){
          resolveResult.then(resolve)
        }else{
          resolve(resolveResult) 
        }
      }
      this.resolveArr.push(resolveFn)
      const rejectFn = function(val){
        const rejectResult = onreject(val)
        // reject(rejectResult) 
        if(rejectResult instanceof MPromise){
          rejectResult.then(reject)
        }else{
          reject(rejectResult) 
        }
      }
      this.rejectArr.push(rejectFn)
    })
  }
}