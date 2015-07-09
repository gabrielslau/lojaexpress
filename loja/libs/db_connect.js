var mongoose = require('mongoose');
var db_url = {
    test: 'mongodb://localhost:27017/loja'
};
var db;

module.exports = function () {
    if (db === undefined) {
        _db = mongoose.connect(db_url.test);
        db = _db.connection;

        db.on('connected', function () {
            console.log('Mongoose default connection open');
        });
        db.once('open', function(callback){
            console.log('Conectou com o Banco de Dados');
        });
        db.on('error', function(err){
            console.log('Não Connectou: ' + err.message);
        });
    }

    return db;
};