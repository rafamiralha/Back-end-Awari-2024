const router = require('express').Router();
const list = require('../controllers/category-controller');

module.exports = (request, response) =>{
    router.use('/',list(request, response));
}