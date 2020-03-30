const express = require('express')
const api = express.Router()
const auth = require('../middlewares/auth')


/**Ruta de ejemplo para implementar jwt 
 * Ruta: http://localhost:3001/api/jwtprobe
*/
api.get('/jwtprobe', auth, (req, res) => {
    return res.status(200).send({message: 'Con autorización'})
})

module.exports = api