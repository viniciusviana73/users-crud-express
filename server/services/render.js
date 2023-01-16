const axios = require('axios')

exports.homeRoutes = async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:${PORT}/api/users`),
              users = response.data
        //console.log(users)
        res.render('index', { users: users })
    } catch (error) {
        res.send({message: `Error homeRoutes: ${error}`})
        console.log(`Error homeRoutes: ${error}`)
    }
}

exports.newUser = (req, res) => {
    res.render('newuser')
}
