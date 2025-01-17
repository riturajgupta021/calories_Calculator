const DishModel = require("../models/dish.model")

const createDish = async (req, res) => {
    const { dishName, items, calories } = req.body
    if (!dishName || !items) {
        return res.status(400).json({ message: "Please enter all fields" })
    }
    const dishdata = await DishModel.create({ dishName, calories, items })
    res.status(201).json({ message: "Dish created successfully", dishdata })
}

const getDish = async (req, res) => {
    const dishdata = await DishModel.find()
    res.status(200).json({ dishdata })
}

module.exports = { createDish, getDish };