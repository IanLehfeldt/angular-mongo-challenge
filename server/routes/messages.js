var express = require('express');
var router = express.Router();
var Message = require('../models/message.schema.js');

router.post('/', function (req, res){
    console.log('messages post route was hit: ', req.body);
    res.send('Meee-ow');
});

module.exports = router;