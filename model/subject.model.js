module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define("Subject", {
    name: { type: DataTypes.STRING, unique: true },
  });
  return Subject;
};
