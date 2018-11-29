const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodCategorySchema = new Schema({
    name: { type: String }
});

const FoodCategory = mongoose.model('food_category', FoodCategorySchema);
module.exports = FoodCategory;