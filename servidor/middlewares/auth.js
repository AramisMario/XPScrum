'use strict'

const services = require('../services')

async function isAuth(req, res,next){
    if(!req.headers.authorization){
        return res.status(403).send({ message: 'No tienes autorización' })
    }

    const token = req.headers.authorization.split(' ')[1]

    try {
        var response = await services.decodeToken(token);
        req.user = response;
        next();
    } catch (error) {
        res.status(401).send('Token incorrecto o expirado');
    }
}

module.exports = isAuth
