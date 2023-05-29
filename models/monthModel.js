const { mongoose, Schema } = require("mongoose");

const monthSchema = new mongoose.Schema({
    creator : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    monthName : {
        type : String,
    }

})

const monthModel = mongoose.model("Month", monthSchema);

module.exports = monthModel;