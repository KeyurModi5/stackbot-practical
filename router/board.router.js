const boardRouter = require("express").Router();

const { boardList, createboard } = require("../controller/board.controller");

boardRouter.post("/add", createboard);
boardRouter.get("/list", boardList);

module.exports = boardRouter;
