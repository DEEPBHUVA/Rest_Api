const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserID : Number,
    UserName : String,
    Password : String,
    Email : String,
    Phone : String,
    Address : String
});

module.exports = mongoose.model('User', UserSchema);

