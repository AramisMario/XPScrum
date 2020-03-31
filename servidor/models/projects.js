'use strict';
module.exports = (sequelize, DataTypes) => {
  const Projects = sequelize.define('projects', {
    name: DataTypes.STRING
  }, {
    timestamps: false,
  });
  Projects.associate = function(models) {
    // associations can be defined here
    Projects.hasMany(models.rols);
    Projects.hasOne(models.productbacklogs);
  };
  return Projects;
};