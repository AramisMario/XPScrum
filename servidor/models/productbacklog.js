'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductBacklog = sequelize.define('productbacklogs', {
    name: DataTypes.STRING,
    projectId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'projects',
        key:'id'
      }
    }
  }, {
    timestamps:false
  });
  ProductBacklog.associate = function(models) {
    // associations can be defined here
    ProductBacklog.hasMany(models.sprintbacklogs);
  };
  return ProductBacklog;
};