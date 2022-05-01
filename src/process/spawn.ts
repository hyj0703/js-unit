import {spawnSync} from 'child_process'

const result = spawnSync('ls',{encoding:'utf8'})
console.log(result)