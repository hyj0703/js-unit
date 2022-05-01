import http from 'http'
import cluster from 'cluster'
import {cpus} from 'os'

if(cluster.isPrimary){
  for(let i=0;i<cpus().length;i++){
    cluster.fork()
  }
  cluster.on('exit',(worker,code,sigal)=>{
    console.log(`worker ${worker.process.pid} exit with ${code},${sigal}`)
  })
}else{
  console.log('cluster start'+process.pid)
  http.createServer((req,res)=>{
    res.writeHead(200)
    res.end('hello world!!!\n'+process.pid)
  }).listen(3000)
}
