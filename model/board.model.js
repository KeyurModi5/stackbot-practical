module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define("Board", {
    boardName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Board;
};
