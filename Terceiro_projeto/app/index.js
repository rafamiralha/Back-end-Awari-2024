const express = require('express');

const app = express();
app.use('/api/categories',require('./routes/category'))
module.exports = app;