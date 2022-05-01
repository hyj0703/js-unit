import dgrom from 'dgram'

const server = dgrom.createSocket('udp4')

server.on('listening',()=>{
  const address = server.address()
  console.log(`${address.address}:${address.port}`)
})