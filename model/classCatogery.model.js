module.exports = (sequelize, DataTypes) => {
  const ClassCategory = sequelize.define("ClassCategory", {
    name: { type: DataTypes.STRING, unique: true },
  });
  return ClassCategory;
};
