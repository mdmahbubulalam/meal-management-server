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

    expense : {
        type : Number,
        required : true,
    },

    mealCount : {
        type : Number,
        required : true,
    },

    date : {
        type : String,
        required : true,
    },
},

{ timestamps: true }

);

const mealModel = mongoose.model('Meal', mealSchema);

module.exports = mealModel;