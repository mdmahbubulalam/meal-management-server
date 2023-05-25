const { getAllUsers, updateUser } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

const userRoute = require('express').Router();

userRoute.get('/allUsers', getAllUsers)
userRoute.put('/:userId', updateUser)
module.exports = userRoute;