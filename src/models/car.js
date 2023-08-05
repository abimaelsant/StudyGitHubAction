const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    color: {
        type: String
    },
    model: {
        type: String
    },
    registrationNumber: {
        type: String,
        required: true,
        unique: true
    }
});

const CarModel = mongoose.model('Car', schema);

module.exports = {
    CarModel
};