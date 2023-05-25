const { signIn } = require('../../controllers/authController/signIn');

const signInRoute = require('express').Router();

signInRoute.post('/signIn', signIn)
module.exports = signInRoute;