// function getVal<T>(obj:T,k:keyof T){
//   return obj[k]
// }

// let obj1 = {
//   x:1,
//   y:2
// }

// let obj2 = {
//   name:'mt',
//   age:35
// }

// getVal<typeof obj1>(obj1,'x')
// getVal<typeof obj2>(obj2,'name')

interface IResponseData<T> {
  code:number
  message?:string
  data:T
}

// function getData(url:string){
//   return fetch(url).then(response => {
//     return response.json()
//   }).then(data=>{
//     return data
//   })
// }

interface IResponseDataUser {
  name:string
  age:string
  id:number
}
interface IResponseDataArticle {
  title:string
  content:string
  auther:IResponseDataUser
}

async function getData<U>(url:string){
  const response = await fetch(url)
  const data:Promise<IResponseData<U>> = await response.json()
  return data
}

(async function(){
  const user  = await getData<IResponseDataUser>('/user')
  user.data.age
  const article = await getData<IResponseDataArticle>('/article')
  article.data.auther
})()