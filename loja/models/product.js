/**
 * Created by Alejandro on 09/07/2015.
 */
module.exports = function (app) {
    try {
        var db = require('../libs/db_connect')();
        var schema = require('mongoose').Schema;
        var Product = schema({
            name : { type: String, required: true, unique: true},
            value : { type: Number, required: true}
        });
        console.log('Criado model product');
        return db.model('Product', Product);
    } catch (e) {
        console.log('Falhou ao criar model product');
    }
};