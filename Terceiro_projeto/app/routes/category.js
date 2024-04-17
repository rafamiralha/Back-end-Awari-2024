const router = require('express').Router();
const list = require('../controllers/category-controller')


router.use('/',list())