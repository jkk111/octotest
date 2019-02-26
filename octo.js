const fs = require('fs')

for(let i = 0 ; i< 1000; i++) {
  const ws =fs.createWriteStream(`${i}.txt`)
  ws.write(i + '')
  ws.close()
}