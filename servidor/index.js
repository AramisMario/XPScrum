'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path')
const api  = require('./routes')
const db = require('./models');
var mysql = require('mysql2');
const app = express();

var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', api)

var connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.username,
    password: process.env.password,
    database: process.env.database
});

db.sequelize.sync().then(function() {
    app.listen(PORT, ()=> console.log(`Api rest run on port ${PORT}`))
}).catch( (err)=>{
    console.error(err);
})
