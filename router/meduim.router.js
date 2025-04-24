const mediumRouter = require("express").Router();

const { createmeduim, mediumList } = require("../controller/medium.controller");

mediumRouter.post("/add", createmeduim);
mediumRouter.get("/list", mediumList);

module.exports = mediumRouter;
