import {createServer,Socket} from 'net'

const server = createServer(socket=>{
  const httpResponse = 
`HTTP/1.1 200 OK
Content-type: text/html

<html>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
`
  socket.write(httpResponse)
  socket.end()
})

server.listen(3000,'0.0.0.0')