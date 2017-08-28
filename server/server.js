var express = require('express');
var app = express();
var port = 5000;
var bodyParser = require('body-parser');
var messages = require('./routes/messages.js');
var mongoose = require('mongoose');

//serving static files
app.use(express.static('public'));
app.use(bodyParser.json());

//routes
app.use('/messages', messages);
//mongoose connection
var databaseUrl = 'mongodb://localhost:27017/messagesapp';
mongoose.connect(databaseUrl, 
{
    useMongoClient: true
});
mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to: ', databaseUrl);
});
mongoose.connection.on('err', function(){
    console.log('Mongoose failed to connect: ', err);
});

//listening on port
app.listen(port, function (){
    console.log('Listening on port: ', port);
    
});