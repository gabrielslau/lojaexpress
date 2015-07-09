/**
 * Created by Alejandro on 09/07/2015.
 */
var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');

describe('Teste de integração das funções relacionadas a produtos', function () {
    var url = 'http://localhost:3000';

    it('Deve infomar quando o produto foi criado com sucesso', function (done) {
        var p = {
            name: 'xone de cafe',
            value: 12.5
        };
        request(url)
            .post('/product')
            .send(p)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;

                res.body.status.should.equal('success');
                res.body.product.should.have.property('_id');
                res.body.product.name.should.equal(p.name);
                res.body.product.value.should.equal(p.value);

                done();
            });
    });


});