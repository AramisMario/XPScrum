'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rols', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      projectId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'projects',
          key:'id'
        },
        userId:{
          type:Sequelize.INTEGER,
          allowNull:false,
          references:{
            model:'users',
            key:'id'
          }
        }
      },
      name: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rols');
  }
};
