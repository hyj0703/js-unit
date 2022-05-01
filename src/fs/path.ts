import {resolve} from 'path'
// console.log(process.argv)
//工作目录
// console.log(process.cwd())
// 相对 -> 绝对
// console.log(resolve(process.cwd()))
// console.log(resolve("./package.json"))
// 当前文件所在目录
// console.log('01.ts',resolve(__dirname,'../basic/01.ts'))
//改变工作目录
process.chdir(resolve(__dirname))
