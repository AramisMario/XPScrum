'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('rols', {
    name: DataTypes.STRING
  }, {
    timestamps: false,
  });
  Rol.associate = function(models) {
    Rol.hasMany(models.users);
  };
  return Rol;
};