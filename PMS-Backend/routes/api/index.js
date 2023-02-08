const route = require('express').Router();
route.use('/user', require('./user'));


module.exports = route 