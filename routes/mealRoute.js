const { getAllMeal, addMeal, singleMeal, updateMeal, deleteMeal } = require('../controllers/mealController');

const mealRoute = require('express').Router();

mealRoute.get('/allMeals', getAllMeal)
mealRoute.post('/addMeal', addMeal)
mealRoute.get('/:mealId', singleMeal)
mealRoute.put('/:mealId', updateMeal)
mealRoute.delete('/:mealId', deleteMeal)
module.exports = mealRoute;