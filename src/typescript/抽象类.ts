abstract class component<T1,T2> {
  props:T1
  state:T2
  constructor(props){
    this.props = props
  }
  abstract render():string
}

interface IMyComponentProps {
  val:number
}
interface IMyComponentState {
  x:number
}
interface ILog {
  getInfo():string
}
interface IStorage extends ILog {
  save(data:string):void
}
class MyComponent extends component<IMyComponentProps,IMyComponentState> implements IStorage {
  constructor(props){
    super(props)
    this.state = {
      x:1
    }
  }
  getInfo(){
    return ''
  }
  save(data){}
  render(): string {
    this.props.val
    this.state.x
    return '<mycomponent />'
  }
}
const mycomponent = new MyComponent({val:1})
mycomponent.render()