'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('historias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      puntos:{
        type:Sequelize.INTEGER
      },
      historiasId:{
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
    return queryInterface.dropTable('historias');
  }
};