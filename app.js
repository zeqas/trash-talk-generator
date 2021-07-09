const express = require('express')
const exphbs = require('express-handlebars')
const movieList = require('./movies.json')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('get form POST request')
  res.render('index')
})

// listening server
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`)
})