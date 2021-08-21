
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


const app = express()
const port = 4000

const template = require('./routes/index')

app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))

app.use('/static', express.static('src/public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', template)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log(path.join(__dirname, 'views'))
})