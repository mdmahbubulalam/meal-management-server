const User = require("../../models/userModel")
const bcrypt = require("bcrypt");

exports.signUp = async (req, res, next) => {
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const {username, email, password} = req.body;
    console.log(username)
    try{
        const user = await User.create({
            username,
            email,
            password
        })

        res.status(201).json({
            message: "your account has been created successfully",
            user
        })
    }catch(err){
        console.log(err)
        res.status(401).json({message: "Something went wrong"});
    }
}