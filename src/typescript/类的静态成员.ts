type IAllowFileTypeList = 'png'|'gif'|'jpg'|'jpeg'|'webp'
export class User {
  static readonly ALLOW_FILE_TYPE_LIST:Array<IAllowFileTypeList>=['png','gif','jpg','jpeg','webp']
  constructor(
    public id:number,
    public username:string,
    private _allowFileTypeList:Array<IAllowFileTypeList>
  ){

  }
  static info():void{
    console.log(User.ALLOW_FILE_TYPE_LIST)
  }
}
User.info()
