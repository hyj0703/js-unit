import {fork} from 'child_process'
import path from 'path'


function sleep(ms){
  return new Promise(resolve=>{
    setTimeout(resolve,ms)
  })
}
const child1 = fork(path.resolve(__dirname,'b.ts'))
const child2 = fork(path.resolve(__dirname,'b.ts'))
const child3 = fork(path.resolve(__dirname,'b.ts'))

const child = [child1,child2,child3]

child.forEach(x=>{
  x.on('message',(data)=>{
    console.log(data)
  })
})

child.forEach(x=>x.send('hello'))

// async function run(){
//   while(true){
//     await sleep(1000)
//     console.log('tick...')
//   }
// }
// run()