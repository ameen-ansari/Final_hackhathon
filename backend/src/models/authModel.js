const mongoose = require('mongoose');

const userSchema = mongoose.model('users', new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
}));

module.exports = userSchema