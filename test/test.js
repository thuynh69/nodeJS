var request = require('supertest');
var app = require('../index.js');

describe ('GET /', function() {
    it('reponse avec Bonjour', function(){
        request(app).get('/').expect('{"response": "Hello World !"}', done)
    });
});

describe ('GET /', function() {
    it('reponse avec Bonjour', function(){
        request(app).get('/retour').expect('{"response": "ça fonctionne"}', done)
    });
});

app.listen(process.env.PORT || 3000)
module.exports = app