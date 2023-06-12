const { getAllMeal, addMeal, updateMeal, deleteMeal, userMealInfo } = require('../controllers/mealController');

const mealRoute = require('express').Router();

mealRoute.get('/allMeals', getAllMeal)
mealRoute.post('/addMeal', addMeal)
mealRoute.get('/userMealInfo', userMealInfo)
mealRoute.put('/:mealId', updateMeal)
mealRoute.delete('/:mealId', deleteMeal)
module.exports = mealRoute;