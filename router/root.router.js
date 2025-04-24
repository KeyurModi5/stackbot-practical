const rootRouter = require("express").Router();

const boardRouter = require("./board.router");
const instituteRouter = require("./institute.router");
const mediumRouter = require("./meduim.router");
const categoryRouter = require("./classCategory.router");
const standardRouter = require("./standard.router");
const subjectRouter = require("./subject.router");
const schoolRouter = require("./school.router");

rootRouter.use("/institute", instituteRouter);
rootRouter.use("/board", boardRouter);
rootRouter.use("/medium", mediumRouter);
rootRouter.use("/category", categoryRouter);
rootRouter.use("/standard", standardRouter);
rootRouter.use("/subject", subjectRouter);
rootRouter.use("/school", schoolRouter);

module.exports = rootRouter;
