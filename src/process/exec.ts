import {execSync} from 'child_process'
import {resolve} from 'path'

// const result = execSync('ls',{encoding:'utf8'})
const result = execSync(`ts-node ${resolve(__dirname,'b.ts')}`,{encoding:'utf8'})
console.log(result)