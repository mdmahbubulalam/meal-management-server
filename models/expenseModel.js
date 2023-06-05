const { default: mongoose } = require("mongoose");

const expenseSchema = new mongoose.Schema({
    userName : {
        type : String,
    },

    userEmail : {
        type : String,
    },

    monthName : {
        type : String,
    },

    expenses : {
        type : Number,
        required : true,
    },
},

{ timestamps: true }

);

const expenseModel = mongoose.model('Expense', expenseSchema);

module.exports = expenseModel;