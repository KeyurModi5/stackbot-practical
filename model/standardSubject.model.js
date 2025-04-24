module.exports = (sequelize, DataTypes) => {
  const StandardSubject = sequelize.define("StandardSubject", {});

  StandardSubject.associate = (models) => {
    StandardSubject.belongsTo(models.Standard);
    StandardSubject.belongsTo(models.Subject);
  };

  return StandardSubject;
};
