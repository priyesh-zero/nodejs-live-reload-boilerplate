const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const http = require('http')

dotenv.config()

const app = express()

const server = http.createServer(app)
const io = require('socket.io').listen(server)

app.use(express.static(path.join(__dirname, "client", "assets")))

io.set('origins', '*:*');

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'index.html')))

if(process.env.PORT) {
  server.listen(process.env.PORT, (err, con) => {
    if (err) return console.log(err)
    console.log(`Connected to the server on ${process.env.PORT}`)
  })
}
