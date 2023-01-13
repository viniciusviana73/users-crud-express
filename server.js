const express = require('express'),
      app = express()

const path = require('path')

const dotenv = require('dotenv')
      dotenv.config({ path : 'config.env'}),
      PORT = process.env.PORT || 4040

// Importing MongoDB connection.js
const connect = require('./server/database/connection')
      connect()

// Log Requests using morgan
const morgan = require('morgan')
app.use(morgan('tiny'))

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended : true }))

// Setting view engine
app.set('view engine', 'hbs')

// Setting assets folders
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// Importing router.js
app.use(require('./server/router/router'))

app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)})