const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: { type: String },
    avatar: { type: String },
    role: { type: ObjectId }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;