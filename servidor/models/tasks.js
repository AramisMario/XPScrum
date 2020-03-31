'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define('tasks', {
    time: DataTypes.STRING,
    state: DataTypes.STRING,
    description: DataTypes.TEXT,
    slack: DataTypes.BOOLEAN,
    historiaId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'historias',
        key:'id'
      }
    }
  }, {timestamps:false});
  Tasks.associate = function(models) {
    // associations can be defined here
  };
  return Tasks;
};