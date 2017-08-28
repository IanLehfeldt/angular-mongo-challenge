var express = require('express');
var router = express.Router();
var Message = require('../models/message.schema.js');

router.post('/', function (req, res){
    console.log('messages post route was hit: ', req.body);
    var newMessageToSaveToCollection = new Message(req.body);
    newMessageToSaveToCollection.save(function (err, data){
        if (err){
            console.log('Error saving to collection: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

router.get('/', function (req, res){
    console.log('messages get route was hit');
    Message.find({}, function (err, messages){
        if(err){
            console.log('Error finding messages: ', err);
            res.sendStatus(500);
        } else {
            res.send(messages);
        }
    }); 
});

module.exports = router;