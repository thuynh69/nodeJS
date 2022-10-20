const express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send({"response": "Hello World ! "});
});

app.get('/retour', function(req, res){
    res.send({"response": "ça fonctionne"});
});

app.listen(process.env.PORT || 3000)

module.exports = app

