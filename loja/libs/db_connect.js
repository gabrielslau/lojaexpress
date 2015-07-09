var mongoose = require('mongoose');
var db_url = {
    test: 'mongodb://localhost:27017/loja'
};
var db;

module.exports = function () {
    if (db === undefined) {
        db = mongoose.connect(db_url.test).connection;

        db.on('connected', function () {
            console.log('Mongoose default connection open');
        });
        db.once('open', function(callback){
            console.log('Conectou com o Banco de Dados');
        });
        db.on('error', function(err){
            console.log('N�o Connectou: ' + err.message);
        });
    }
    return db;
};