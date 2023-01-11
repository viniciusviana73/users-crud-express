const express = require('express'),
      app = express()

const dotenv = require('dotenv')
      dotenv.config({ path : 'config.env'}),
      PORT = process.env.PORT || 4040

const morgan = require('morgan')
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send("Crud Application")    
})

app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)})