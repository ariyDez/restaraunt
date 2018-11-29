const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
    name: { type: String },
    foods: { type: [ObjectId ]},
    isGroup: { type: Boolean, default: false },
    customer: { type: ObjectId }
});

const Order = mongoose.model('food', OrderSchema);
module.exports = Order;