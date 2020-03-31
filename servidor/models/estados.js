'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estados = sequelize.define('estados', {
    estados: DataTypes.STRING
  }, {timestamps:false});
  Estados.associate = function(models) {
    Estados.hasMany(models.estadohistorias);
  };
  return Estados;
};