const express = require('express'),
      route = express.Router()

const services = require('../services/render'),
      controller = require('../controller/controller')

/**
 * @description Root Route (Home Page)
 * @method GET
 */
route.get('/', services.homeRoutes)

/**
 * @description Add new user page
 * @method GET /newuser
 */
route.get('/newuser', services.newUser)

/**
 * @description ---- API CRUD
 * @method POST to create new user
 * @method GET to find all/single user(s)
 * @method PUT to edit an existing user
 * @method DELETE to delete an user
 */
route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

// Exporting route
module.exports = route