const mongoose = require('mongoose');

const userSchema = mongoose.model('users', new mongoose.Schema({
    password: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    userName: {
        required: true,
        type: String,
        unique: true,
    },
    phoneNumber: {
        required: true,
        type: String,
        unique: true,
    },
}));

module.exports = userSchema