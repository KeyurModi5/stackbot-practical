const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.USERNAME,
  process.env.DB_NAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: "postgres",
    logging: false,
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.institute = require("../model/institute.model.js")(sequelize, DataTypes);
db.board = require("../model/board.model.js")(sequelize, DataTypes);
db.medium = require("../model/medium.model.js")(sequelize, DataTypes);
db.Standard = require("../model/standard.model.js")(sequelize, DataTypes);
db.Subject = require("../model/subject.model.js")(sequelize, DataTypes);
db.SchoolRegistration = require("../model/school.model.js")(
  sequelize,
  DataTypes
);
db.StandardSubject = require("../model/standardSubject.model.js")(
  sequelize,
  DataTypes
);
db.ClassCategory = require("../model/classCatogery.model.js")(
  sequelize,
  DataTypes
);

db.StandardSubject.belongsTo(db.Standard);
db.StandardSubject.belongsTo(db.Subject);

db.SchoolRegistration.belongsTo(db.board);
db.SchoolRegistration.belongsTo(db.institute);
db.SchoolRegistration.belongsTo(db.medium);
db.SchoolRegistration.belongsTo(db.ClassCategory);
db.SchoolRegistration.belongsTo(db.Standard);
db.SchoolRegistration.belongsTo(db.StandardSubject);

db.Standard.belongsTo(db.ClassCategory, {
  foreignKey: "classCategoryId",
});
module.exports = db;
