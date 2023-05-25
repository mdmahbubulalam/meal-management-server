const {signUp}  = require('../../controllers/authController/signUp');

const signUpRoute = require('express').Router();

signUpRoute.post('/signUp', signUp)
module.exports = signUpRoute;