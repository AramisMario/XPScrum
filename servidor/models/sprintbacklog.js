'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sprintbacklog = sequelize.define('sprintbacklogs', {
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    stopDate: DataTypes.DATE,
    productbacklogId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      reference:{
        model:'productbacklogs',
        key:'id'
      }
    }
  }, {timestamps:false});
  Sprintbacklog.associate = function(models) {
    Sprintbacklog.hasMany(models.estadohistorias);
  };
  return Sprintbacklog;
};