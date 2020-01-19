const dotenv = require('dotenv')
const express = require('express')
const path = require('path')

const app = express()

dotenv.config()

app.use(express.static(path.join(__dirname, "client", "assets")))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'client', 'index.html')))

if(process.env.PORT) {
  app.listen(process.env.PORT, (err, con) => {
    if (err) return console.log(err)
    console.log(`Connected to the server on ${process.env.PORT}`)
  })
}
