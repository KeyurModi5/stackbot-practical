module.exports = (sequelize, DataTypes) => {
  const Standard = sequelize.define("Standard", {
    name: DataTypes.STRING,
  });

  Standard.associate = (models) => {
    Standard.belongsTo(models.ClassCategory, {
      foreignKey: "classCategoryId",
    });
  };

  return Standard;
};
