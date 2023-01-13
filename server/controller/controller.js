let UserDB = require('../models/User')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({message: `Empty request!`})
        return
    }

    const user = new UserDB({
        name: req.body.user_name,
        email: req.body.user_mail,
        gender: req.body.radioSexo,
        birthdate: req.body.user_birth 
    })

    try {
        user.save(user, (data) => {
            res.send(data)
        })
    } catch (error) {
        res.status(500).send({message: `Error: ${error}` || 'Error while creating new user'})
    }
}


exports.find = (req, res) => {

}

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}