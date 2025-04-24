module.exports = (sequelize, DataTypes) => {
  const Institute = sequelize.define("Institute", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Institute;
};
