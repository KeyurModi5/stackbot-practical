const express = require("express");
require("dotenv").config();
const app = express();

const db = require("./connection/connection");
const rootRouter = require("./router/root.router");

app.use(express.json());

app.use(rootRouter);

db.sequelize.sync({ alter: true }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
