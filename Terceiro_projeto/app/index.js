const express = require('express');

const app = express();
app.use('/api/categories',require('./routes/category'))
app.use('/api/users',require('./routes/user'))
module.exports = app;