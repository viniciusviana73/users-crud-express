const express = require('express'),
      route = express.Router()

const services = require('../services/render')

/**
 * @description Root Route
 * @method GET
 */
route.get('/', services.homeRoutes)

/**
 * @description Add new user
 * @method GET /newuser
 */
route.get('/newuser', services.newUser)

module.exports = route