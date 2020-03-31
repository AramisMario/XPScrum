'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('rols', {
    name: DataTypes.STRING,
    projectId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'projects',
        key:'id'
      }
    },
    userId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'users',
        key:'id'
      }
    }
  }, {
    timestamps: false,
  });
  Rol.associate = function(models) {
    // Rol.hasMany(models.users);
    // Rol.belongsTo(models.productbacklog);
  };
  return Rol;
};