'use strict'

const User = require('./../models').user;
const Rol = require('./../models').rol;
const service = require('./../services') 

async function singUp(req, res){
    const { email, name, password, rolId} = req.body;
    const userData = {
        email,
        name,
        password,
        rolId
    }
    try {
        let user = await User.create(userData);
        let userResponse = await User.findByPk(user.dataValues.id, {include: [Rol]});
        return res.status(200).send({ message: 'Te has logueado correctamente', token: service.createToken(userResponse) })
    } catch (error) {
        res.status(500).send({message: `Error al crear el usuario: ${error}`})
    }
}

async function singIn(req, res){
    const { email, password } = req.body;
    try {
        let user = await User.findOne({
            include: [Rol], 
            attributes: ['email', 'password', 'name', 'id'], 
            where: {email: email}
        });
        if(user === null) return res.status(404).send({message: 'El email ingresado es incorrecto'})
        return user.comparePassword(password, (err, isMatch)=>{
            if (err) return res.status(500).send({ message: `Error al ingresar: ${err}` })
            if (!isMatch) return res.status(404).send({ message: `Contraseña incorrecta para: ${email}` })
            return res.status(200).send({ message: 'Te has logueado correctamente', token: service.createToken(user) })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: error})
    }

}

module.exports = {
    singUp,
    singIn
}