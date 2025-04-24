const standardRouter = require("express").Router();

const {
  StandardList,
  createStandard,
} = require("../controller/standard.controller");

standardRouter.post("/add", createStandard);
standardRouter.get("/list/:id", StandardList);

module.exports = standardRouter;
