const schoolRouter = require("express").Router();

const { register } = require("../controller/school.controller");

schoolRouter.post("/add", register);

module.exports = schoolRouter;
