const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const FoodSchema = new Schema({
    name: { type: String },
    category: { type: ObjectId}
});

const Food = mongoose.model('food', FoodSchema);
module.exports = Food;