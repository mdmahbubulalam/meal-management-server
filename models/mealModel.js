const { default: mongoose } = require("mongoose");

const mealSchema = new mongoose.Schema({
    userName : {
        type : String,
    },

    userEmail : {
        type : String,
    },

    monthName : {
        type : String,
    },

    mealCount : {
        type : Number,
        required : true,
    },

    expense : {
        type : Number,
        required : true,
    },
},

{ timestamps: true }

);

const mealModel = mongoose.model('Meal', mealSchema);

module.exports = mealModel;