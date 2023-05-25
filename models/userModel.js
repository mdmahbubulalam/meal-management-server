const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        trim : true,
        require: true
    },

    email : {
        type : String,
        trim : true,
        require: true,
        unique: true
    },

    password : {
        type : String,
        trim : true,
        require: true
    }
})

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;