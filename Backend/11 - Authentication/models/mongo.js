const mongoose = require("mongoose");
let User = require("./user");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    fullName: { type: String, default: '' },
    email: { type: String, default: '' },
    password: { type: String, default: '' }
});

module.exports = User = mongoose.model('User', UserSchema);