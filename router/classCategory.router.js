const categoryRouter = require("express").Router();

const {
  ClassCategoryList,
  createClassCategory,
} = require("../controller/classCatogery.controller");

categoryRouter.post("/add", createClassCategory);
categoryRouter.get("/list", ClassCategoryList);

module.exports = categoryRouter;
