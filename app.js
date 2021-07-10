const express = require('express')
const exphbs = require('express-handlebars')

const dataBase = require('./dataBase.json')
const talkShitGenerator = require('./models/talkShit.js')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', { targets: dataBase.job })
})

app.post('/', (req, res) => {
  const talkShit = talkShitGenerator(req.body.career)
  res.render('index', { targets: dataBase.job, talkShit })
})

// listening server
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})