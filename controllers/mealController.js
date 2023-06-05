const Meal = require("../models/mealModel");


exports.addMeal = async (req, res, next) => {
    const {
        userName,
        userEmail,
        monthName,
        mealCount,
    } = req.body;

    try{
        const meal = await Meal.create({
            userName,
            userEmail,
            monthName,
            mealCount,
        })

        res.status(201).json({
            message: "Meal has been added successfully",
            meal
        })
    }catch(err){
        console.log(err)
        res.status(401).json({message: "Something went wrong"});
    }
}

exports.getAllMeal = async (req, res, next) => {
    try {

       const meal = await Meal.find({});

       res.status(200).send(meal);
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "Something went wrong"});
    }
}

exports.singleMeal = async (req, res, next) => {
    const mealId = await req.params.mealId;
    
    try {

        const meal = await Meal.findById(mealId)
        console.log(meal.userName)
        if (!meal) {
            res.status(400).json({message: "Wrong meal!"});
       }

       res.status(200).json({
        message:"Successfully get meal",
        meal
    });
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "You can't get the meal"});
    }
}

exports.updateMeal = async (req, res, next) => {
    const mealId = await req.params.mealId;

    try {        
       const meal = await Meal.findById(mealId);

       if (!meal) {
            res.status(400).json({message: "Wrong meal!"});
       }

       const updateMeal = await Meal.findByIdAndUpdate(
        mealId, 
        {mealCount:req.body.mealCount}, 
        {new : true} 
        )

       res.status(200).json({
        message:"Meal updated successfully",
        updateMeal
    });
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "You can't update"});
    }
}

exports.deleteMeal = async (req, res, next) => {
    const mealId = await req.params.mealId;
    try {

        const meal = await Meal.findById(mealId);
        if (!meal) {
            res.status(400).json({message: "Wrong meal!"});
       }

       const deletedMeal = await Meal.findByIdAndDelete(mealId)

       res.status(200).json({
        message:"Meal deleted successfully",
        deletedMeal
    });
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "You can't delete"});
    }
}