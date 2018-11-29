const express = require('express');
const router = express.Router();

const FoodCategoryController = require('../controllers/FoodCategory.controller');
const FoodController = require('../controllers/Food.controller');

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
    next();
});

router.get('/category', FoodCategoryController.getAll.bind(FoodCategoryController));
router.get('/category/:id', FoodCategoryController.get.bind(FoodCategoryController));
router.post('/category', FoodCategoryController.save.bind(FoodCategoryController));

router.get('/food', FoodController.getAll.bind(FoodCategoryController));
router.get('/food/:id', FoodController.get.bind(FoodCategoryController));
router.post('/food', FoodController.save.bind(FoodCategoryController));