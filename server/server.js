var express = require('express');
var app = express();
var port = 5000;


//serving static files
app.use(express.static('public'));

//routes

//mongoose connection

//listening on port
app.listen(port, function (){
    console.log('Listening on port: ', port);
    
});