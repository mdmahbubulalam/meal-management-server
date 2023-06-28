const { getAllMeal, addMeal, singleMeal, updateMeal, deleteMeal, userMealInfo, currentMonthMealInfo } = require('../controllers/mealController');

const mealRoute = require('express').Router();

mealRoute.get('/allMeals', getAllMeal)
mealRoute.get('/:mealId', singleMeal)
mealRoute.post('/addMeal', addMeal)
mealRoute.get('/userMealInfo', userMealInfo)
mealRoute.get('/currentMonthMealInfo', currentMonthMealInfo)
mealRoute.put('/:mealId', updateMeal)
mealRoute.delete('/:mealId', deleteMeal)
module.exports = mealRoute;