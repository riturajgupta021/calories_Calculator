const express = require("express");
const dish = require("../controllers/dish.controller");

const dishRouter = express.Router()


dishRouter.post("/create_dish", dish.createDish)
dishRouter.get("/get_dish", dish.getDish)


module.exports = dishRouter;   