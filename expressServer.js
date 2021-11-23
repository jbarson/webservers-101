const express = require('express')
const morgan = require('morgan')
const port = 8081

const app = express()

// app.use(express.json())
app.use(express.urlencoded())

app.set("view engine", "ejs")
app.set("views", "views")

const shows = ["Squid Game", "Foundation", "SpongeBob", "Narcos"]

const jonsMiddleware = (req, res, next) => {
  console.log(`The request was received and this is its method ${req.method}`)
  next()
}
app.use(jonsMiddleware)
app.use(morgan('dev'))

app.get('/', (req, res) => {
  // res.send('<h1>home page by express!</h1>')
  res.status(205).render('index')
})

app.get('/shows', (req, res) => {
  res.render('shows', { shows: shows })
})

app.post('/shows', (req, res) => {
  console.log(req.body.show)
  shows.push(req.body.show)
  res.render('shows', { shows: shows })
})

app.get('/about', (req, res) => {

  res.send('<h1>About time for express!</h1>')
})

app.listen(port, () => console.log('express on port ', port))
