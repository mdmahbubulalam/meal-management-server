const User = require("../../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

exports.signIn = async (req, res, next) => {
    const {email, password} = req.body;

    try{
        const user = await User.findOne({ email });

        if(!user){
            return res.status(401).json({
                message: "Wrong credentials!"
            })
        }

        const validated = await bcrypt.compare(password, user.password);

        if(!validated){
            return res.status(400).json({
                message: "Password is incorrect"
            })
        }

        const token = await jwt.sign(
            {email, _id: user._id}, 
            process.env.PRIVATE_KEY,
            {expiresIn: '2H'}
            );
        res.status(200).json({
            message:'Login successful',
            token
        })
    }catch(err){
        console.log(err)
        res.status(404).json({message: "Not Found"});
    }
}