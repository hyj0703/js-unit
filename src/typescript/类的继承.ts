export class User {
  // username:string
  // password:string
  constructor(public username:string,public password:string){
    console.log('这是构造函数')
    // this.username = username
    // this.password = password
  }
  postArticle(title:string,content:string){
    console.log(`${this.username}发表了${title}文章`)
  }
}

class VIP extends User {
  constructor(username:string,password:string,public score:number){
    super(username,password)
  }
  postArticle(title:string,content:string)
  postArticle(title:string,content:string,file:string)
  postArticle(title:any,content:any,file?:any){
    
    super.postArticle(title,content)
    if(file){
      this.postAttachment(file)
    }
  }
  postAttachment(file:string):void{
    console.log(`${this.username}上传了一个附件：${file}`)
  }
}
const vip1 = new VIP('mt','1',0)
vip1.postArticle('标题','内容','1.png')