const { getAllUsers, updateUser, deleteUser, singleUser, findUserByEmail } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

const userRoute = require('express').Router();

userRoute.get('/allUsers', getAllUsers)
userRoute.get('/findByEmail', findUserByEmail)
userRoute.get('/:userId', singleUser)
userRoute.put('/:userId', updateUser)
userRoute.delete('/:userId', deleteUser)
module.exports = userRoute;