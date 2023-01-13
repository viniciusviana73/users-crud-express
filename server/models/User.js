const mongoose = require('mongoose')

// Mongoose schema 
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : {
        type: String,
        required: true
    },
    birthdate : {
        type: Date,
        required: true
    }
})

// Compiling schema into model
const User = mongoose.model('user', userSchema)

// Exporting model
module.exports = User