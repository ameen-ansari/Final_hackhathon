const mongoose = require('mongoose');

const userSchema = mongoose.model('users', new mongoose.Schema({
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    userName: {
        type: String,
    },
    confirmPassword: {
        type: String,
    },
    token: {
        type: String,
    },
}));

module.exports = userSchema