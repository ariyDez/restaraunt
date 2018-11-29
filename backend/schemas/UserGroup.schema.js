const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserGroupSchema = new Schema({
    name: { type: String },
    users: { type: [ObjectId]}
});

const UserGroup = mongoose.model('user_group', UserGroupSchema);
module.exports = UserGroup;