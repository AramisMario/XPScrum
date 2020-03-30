'use strict';

const bcrypt = require('bcrypt-nodejs');

async function hashPassword(password){
  const hashedPassword = await new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if(err) return reject(err);
      return bcrypt.hash(password, salt, null, (err, hash) => {
        if(err) reject(err);
        resolve(hash);
      })
    })
  })
  return hashedPassword;
}
module.exports = {
    hashPassword
}
