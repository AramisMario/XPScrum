'use strict';
module.exports = (sequelize, DataTypes) => {
  const estadohistorias = sequelize.define('estadohistorias', {
    name: DataTypes.STRING,
    usersId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'users',
        key:'id'
      }
    },
    sprintbacklogId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      reference:{
        model:'sprintbacklogs',
        key:'id'
      }
    },
    estadoId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      reference:{
        model:'estados',
        key:'id'
      }
    },
    historiasId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'historias',
        key:'id'
      }
    }
  }, {timestamps:false});
  estadohistorias.associate = function(models) {
    // associations can be defined here
  };
  return estadohistorias;
};