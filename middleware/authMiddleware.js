const User = require("../models/userModel");
const jwt = require('jsonwebtoken');

exports.authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            res.status(401).json({
                message : 'Access Denied'
            });
        }

        const userToken = token.split(' ')[1];

        const decodedToken = jwt.verify(userToken, process.env.PRIVATE_KEY);
        const id = decodedToken.id;

        const user = await User.findById(id);
        req.user = user;
        next();

    } catch (err) {
        res.status(401).json({
            message : 'Authentication failed'
        });
    }
}