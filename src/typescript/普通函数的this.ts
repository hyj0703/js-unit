interface T {
  a:number
  fn:(b:number) => void
}
let obj:T = {
  a:1,
  fn(this:T,b){
  //  this.fn
  }
}
obj.fn(1)