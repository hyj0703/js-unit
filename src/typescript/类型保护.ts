function fn(a:string|number){
  // a.substring(1)
  // (<string>a).substring(1)
  if(typeof a === 'string'){
    a.substring(1)
  }else{
    a.toFixed(2)
  }
}

function canEach(data:any):data is Element[]|NodeList {
  return data.forEach !== undefined
}

function fn1(elements:Element[]|NodeList|Element){
  if(canEach(elements)){
    elements.forEach(e=>{})
  }else{
    elements.attributes
    elements.classList.add('box')
  }
}
interface Person {
  name:string;
  age:number;
}
type personKeys = keyof Person
type newPerson = {
  [k in personKeys]:string
}
