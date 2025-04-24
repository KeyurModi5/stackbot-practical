module.exports = (sequelize, DataTypes) => {
  const SchoolRegistration = sequelize.define("SchoolRegistration", {});

  SchoolRegistration.associate = (models) => {
    SchoolRegistration.belongsTo(models.Institute);
    SchoolRegistration.belongsTo(models.EducationBoard);
    SchoolRegistration.belongsTo(models.Medium);
    SchoolRegistration.belongsTo(models.ClassCategory);
    SchoolRegistration.belongsTo(models.Standard);
  };

  return SchoolRegistration;
};
