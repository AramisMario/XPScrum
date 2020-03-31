'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      slack: {
        type: Sequelize.BOOLEAN
      },
      historiaId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'historias',
          key:'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tasks');
  }
};