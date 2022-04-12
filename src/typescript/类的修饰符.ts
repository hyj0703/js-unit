class User {
  constructor(
    // 只读，自身，子级，外部都能访问
    readonly id:number,
    //受保护，自身，子级能访问
    protected username:string,
    //私有，自身能访问
    private _password:string
  ){}
  action1(){
    this.id
    this.username
    this._password
  }
  // setPassword(password:string){
  //   if(password.length>=6){
  //     this._password = password
  //   }
  // }
  set password(password:string){
    if(password.length>=6){
      this._password = password
    }
  }
  get password():string{
    return '***'
  }
}

class VIP extends User {
  action2(){
    this.id
    this.username
    // this.password
  }
}

const vip1 = new VIP(1,'mt','123')
vip1.id
vip1.password = '123'
// vip1.username
// vip1.password