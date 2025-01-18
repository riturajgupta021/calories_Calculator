const DishModel = require("../models/dish.model");

const createDish = async (req, res) => {
  try {
    const { dishName, items, calories } = req.body;
    if (!dishName || !items) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    const dishdata = await DishModel.create({ dishName, calories, items });
    res.status(201).json({ message: "Dish created successfully", dishdata });
  } catch (error) {
    res.status(500).json({ message: error.message });

  }
};

const getDish = async (req, res) => {
  try {
    const dishdata = await DishModel.find();
    res.status(200).json({ dishdata });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDish = async (req, res) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    if (!id || !payload) {
      return res.status(400).json({ message: "Please enter all fields" });
    }
    const data = await DishModel.findByIdAndUpdate(id, payload, { new: true });

    res.status(200).json({
      message: "Data Updated Sucessfully",
      data
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDish = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) return res.status(400).json({ message: "Please enter all fields" });
    await DishModel.findByIdAndDelete(id)
    res.status(200).json({message: "Data Deleted Succesfully"})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }


}

module.exports = { createDish, getDish, updateDish, deleteDish };
