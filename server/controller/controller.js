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
        user.save(user)
        res.send(user)
    } catch (error) {
        res.status(500).send({message: `Error: ${error}` || 'Error while creating new user'})
    }
}


exports.find = async (req, res) => {
    try {
        const user = await UserDB.find()
        res.send(user)
    } catch (error) {
        res.status(500).send({message: `Error: ${error}` || 'Error while finding user'})
    }
}

exports.update = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({message: `Empty data on update operation!`})
    }

    try {
        const id = req.params.id
        const user = await UserDB.findByIdAndUpdate(id, req.body)
        if (!user) {
            res.status(404).send({message: `Error while updating user with id ${id}.`})
        } else {
            res.send(user)
        }
    } catch (error) {
        res.status(500).send({message: `Error User.update(): ${error}`})
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserDB.findByIdAndDelete(id)
        if (!user) {
            res.status(404).send({message: `Error while deleting user with id ${id}`})
        } else {
            res.send({message: "User deleted successfully"})
        }
    } catch (error) {
        res.status(500).send({message: `Error User.delete(): ${error}`})
    }

}