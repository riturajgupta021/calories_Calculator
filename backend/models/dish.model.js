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
    calories: {
        type: Number,
        required: true
    },
    items: {
        type: [itemSchema],
        required: true
    }

});
const DishModel = mongoose.model("Dish", dishSchema);
module.exports = DishModel