const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.getAllUsers = async (req, res, next) => {
    try {

       const user = await User.find({})

       res.status(200).send(user);
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "Something went wrong"});
    }
}

exports.singleUser = async (req, res, next) => {
    const userId = await req.params.userId;
    try {

        const user = await User.findById(userId);
        if (!user) {
            res.status(400).json({message: "Wrong user!"});
       }

       res.status(200).json({
        message:"Successfully get user",
        user
    });
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "You can't delete"});
    }
}

exports.updateUser = async (req, res, next) => {
    const userId = await req.params.userId;

    try {        
       const user = await User.findById(userId);

       if (!user) {
            res.status(400).json({message: "Wrong user!"});
       }

       req.body.password = await bcrypt.hash(req.body.password, 11);

       const updateUser = await User.findByIdAndUpdate(userId, req.body, {new : true} )

       res.status(200).json({
        message:"User updated successfully",
        updateUser
    });
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "You can't update"});
    }
}

exports.deleteUser = async (req, res, next) => {
    const userId = await req.params.userId;
    try {

        const user = await User.findById(userId);
        if (!user) {
            res.status(400).json({message: "Wrong user!"});
       }

       const deletedUser = await User.findByIdAndDelete(userId)

       res.status(200).json({
        message:"User deleted successfully",
        deletedUser
    });
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "You can't delete"});
    }
}