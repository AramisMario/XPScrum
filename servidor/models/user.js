'use strict';

const bcrypt = require('bcrypt-nodejs');

const hash = require('./../plugins/hashPassword');


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    timestamps:false,
    defaultScope: {
      attributes: { exclude: ['password'] }
    },
  });

  User.associate = function(models) {
   User.hasMany(models.rols);
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
