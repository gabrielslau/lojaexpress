/**
 * Created by Alejandro Felipe on 02/05/2015.
 */
module.exports = function (app) {
    try {
        var db = require('../libs/db_connect')();
        var schema = require('mongoose').Schema;
        var User = schema({
            name : { type: String, required: true},
            email : { type: String, required: true}
        });
        console.log('Criado model user');
        return db.model('User', User);
    } catch (e) {
        console.log('Falhou ao criar model user');
    }
};