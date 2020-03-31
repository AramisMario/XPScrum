'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sprintbacklogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      startDate:{
        allowNull:false,
        type: Sequelize.DATE
      },
      stopDate:{
        type: Sequelize.DATE
      },
      productbacklogId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        reference:{
          model:'productbacklogs',
          key:'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sprintbacklogs');
  }
};