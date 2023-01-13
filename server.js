const express = require('express'),
      app = express()

const path = require('path')

const dotenv = require('dotenv')
      dotenv.config({ path : 'config.env'}),
      PORT = process.env.PORT || 4040

const morgan = require('morgan')
app.use(morgan('tiny'))

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended : true }))

app.set('view engine', 'hbs')

app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/newuser', (req, res) => {
    res.render('newuser')
})

app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)})