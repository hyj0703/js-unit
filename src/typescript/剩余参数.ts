interface IObj {
  [key:string]:any
}


function merge(target:IObj,...other:Array<IObj>){
  return other.reduce((prev,current)=>{
    prev = Object.assign(prev,current)
    return prev
  },target)
}

const mg = merge({a:1},{b:2},{c:3})
console.log(mg)