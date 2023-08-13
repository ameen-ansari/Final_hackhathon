const mongoose = require('mongoose');

const services = mongoose.model('services', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    catagory: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    prize: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
}));

module.exports = services