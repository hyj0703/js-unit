

process.on('message',(data)=>{
  console.log('im is child ts',data)
  process.send('copy that')
  process.exit()
})