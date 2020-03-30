'use strict';

const bcrypt = require('bcrypt-nodejs');

const hash = require('./../plugins/hashPassword');


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    rolId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rols',
        key: 'id'
      }
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    defaultScope: {
      attributes: { exclude: ['password'] }
    },
  });

  User.associate = function(models) {
    User.belongsTo(models.rols);
  };

  User.prototype.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      console.log("ismathch: " + isMatch);
      cb(err, isMatch)
    });
  };


  User.addHook('beforeCreate', async (user, options) => {
    const password = user.getDataValue('password')
    try {
      if (!user.changed('password')) {
        throw new Error("No ha sido modificado")
      }
      const passwordHash = await hash.hashPassword(password);
      user.setDataValue('password', passwordHash);
    } catch (error) {
      throw new Error(error);
    }
  })

  return User;
};
