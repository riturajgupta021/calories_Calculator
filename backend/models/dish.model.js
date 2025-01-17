const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const dishSchema = new mongoose.Schema({
    dishName: {
        type: String,
        required: true
    },
    items: {
        type: [itemSchema],
        required: true
    }
});

module.exports = mongoose.model("Dish", dishSchema);