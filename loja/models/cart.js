/**
 * Created by Alejandro Felipe on 02/05/2015.
 */
module.exports = function (app) {
    try {
        var db = require('../libs/db_connect')();
        var schema = require('mongoose').Schema;
        var Cart = schema({
            user_name : { type: String, required: true}
        });
        console.log('Criado model cart');
        return db.model('Cart', Cart);
    } catch (e) {
        console.log('Falhou ao criar model cart');
    }
};