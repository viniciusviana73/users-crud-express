const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        })
        console.log(`MongoDB connected successfully: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connect