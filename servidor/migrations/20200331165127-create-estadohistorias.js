'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estadohistorias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      sprintbacklogId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        reference:{
          model:'sprintbacklogs',
          key:'id'
        }
      },
      estadoId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        reference:{
          model:'estados',
          key:'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('estadohistorias');
  }
};