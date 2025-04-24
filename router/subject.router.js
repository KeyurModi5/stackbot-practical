const subjectRouter = require("express").Router();

const {
  SubjectList,
  createSubject,
  createStandardSubject,
} = require("../controller/subject.controller");

subjectRouter.post("/add", createSubject);
subjectRouter.post("/standard-subject", createStandardSubject);
subjectRouter.get("/list/:id", SubjectList);

module.exports = subjectRouter;
