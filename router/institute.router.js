const instituteRouter = require("express").Router();

const {
  createInstitute,
  instituteList,
} = require("../controller/institute.controller");

instituteRouter.post("/add", createInstitute);
instituteRouter.get("/list", instituteList);

module.exports = instituteRouter;
