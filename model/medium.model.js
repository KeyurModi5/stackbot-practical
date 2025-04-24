module.exports = (sequelize, DataTypes) => {
  const medium = sequelize.define("Medium", {
    mediumName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return medium;
};
