const { getAllMonth, singleMonth, updateMonth, deleteMonth, addMonth } = require('../controllers/monthController');

const monthRoute = require('express').Router();

monthRoute.get('/allMonths', getAllMonth)
monthRoute.post('/addMonth', addMonth)
monthRoute.get('/:monthId', singleMonth)
monthRoute.put('/:monthId', updateMonth)
monthRoute.delete('/:monthId', deleteMonth)
module.exports = monthRoute;