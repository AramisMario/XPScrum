'use strict';
module.exports = (sequelize, DataTypes) => {
  const Historias = sequelize.define('historias', {
    description: DataTypes.TEXT,
    puntos: DataTypes.INTEGER
  }, {timestamps:false});
  Historias.associate = function(models) {
    Historias.hasMany(models.tasks);
  };
  return Historias;
};