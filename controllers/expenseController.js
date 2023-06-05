const Expense = require("../models/expenseModel");

exports.addExpense = async (req, res, next) => {
    const {
        userName,
        userEmail,
        monthName,
        expenses
    } = req.body;

    try{
        const expense = await Expense.create({
            userName,
            userEmail,
            monthName,
            expenses
        })

        res.status(201).json({
            message: "Expense has been added successfully",
            expense
        })
    }catch(err){
        console.log(err)
        res.status(401).json({message: "Something went wrong"});
    }
}

exports.getAllExpense = async (req, res, next) => {
    try {

       const expense = await Expense.find({});

       res.status(200).send(expense);
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "Something went wrong"});
    }
}

exports.singleExpense = async (req, res, next) => {
    const expenseId = await req.params.expenseId;
    
    try {

        const expense = await Expense.findById(expenseId)
        console.log(expense.userName)
        if (!expense) {
            res.status(400).json({message: "Wrong expense!"});
       }

       res.status(200).json({
        message:"Successfully get expense",
        expense
    });
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "You can't get the expense"});
    }
}

exports.updateExpense = async (req, res, next) => {
    const expenseId = await req.params.expenseId;

    try {        
       const expense = await Expense.findById(expenseId);

       if (!expense) {
            res.status(400).json({message: "Wrong expense!"});
       }

       const updateExpense = await Meal.findByIdAndUpdate(
        mealId, 
        {expense:req.body.expense}, 
        {new : true} 
        )

       res.status(200).json({
        message:"Expense updated successfully",
        updateExpense
    });
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "You can't update"});
    }
}

exports.deleteExpense = async (req, res, next) => {
    const expenseId = await req.params.expenseId;
    try {

        const expense = await Expense.findById(expenseId);
        if (!expense) {
            res.status(400).json({message: "Wrong expense!"});
       }

       const deletedExpense = await Meal.findByIdAndDelete(expenseId)

       res.status(200).json({
        message:"Expense deleted successfully",
        deletedExpense
    });
        
    } catch (err) {
        console.log(err)
        res.status(401).json({message: "You can't delete"});
    }
}