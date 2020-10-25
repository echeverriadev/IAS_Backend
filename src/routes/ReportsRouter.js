const express = require('express');
const app = express();
const ReportsController = require('../controllers/ReportsController');

//Reports' list
app.get('', ReportsController.index);

// Create reports
app.post('', ReportsController.create);

module.exports = app;
