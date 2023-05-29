const Month = require("../models/monthModel");


exports.addMonth = async (req, res, next) => {
    const {monthName} = req.body;
    console.log(monthName)

    try{
        const month = await Month.create({
            monthName
        })

        res.status(201).json({
            message: "Month has been added successfully",
            month
        })
    }catch(err){
        console.log(err)
        res.status(401).json({message: "Something went wrong"});
    }
}

exports.getAllMonth = async (req, res, next) => {
    try {

       const month = await Month.find({}).populate('creator')

       res.status(200).send(month);
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "Something went wrong"});
    }
}

exports.singleMonth = async (req, res, next) => {
    const monthId = await req.params.monthId;
    try {

        const month = await Month.findById(monthId)
        if (!month) {
            res.status(400).json({message: "Wrong month!"});
       }

       res.status(200).json({
        message:"Successfully get month",
        month
    });
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "You can't get the month"});
    }
}

exports.updateMonth = async (req, res, next) => {
    const monthId = await req.params.monthId;

    try {        
       const month = await Month.findById(monthId);

       if (!month) {
            res.status(400).json({message: "Wrong month!"});
       }

       const updateMonth = await Month.findByIdAndUpdate(monthId, req.body, {new : true} )

       res.status(200).json({
        message:"Month updated successfully",
        updateMonth
    });
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "You can't update"});
    }
}

exports.deleteMonth = async (req, res, next) => {
    const monthId = await req.params.monthId;
    try {

        const month = await Month.findById(monthId);
        if (!month) {
            res.status(400).json({message: "Wrong month!"});
       }

       const deletedMonth = await Month.findByIdAndDelete(monthId)

       res.status(200).json({
        message:"Month deleted successfully",
        deletedMonth
    });
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "You can't delete"});
    }
}