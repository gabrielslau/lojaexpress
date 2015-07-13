/**
 * Created by Alejandro on 09/07/2015.
 */
var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');
var app = require('../server');

describe('Teste de integração das funções relacionadas a produtos', function () {
    var url = 'http://localhost:3000';

    beforeEach(function (done) {
        app.loja.models.product.remove({}, function () {
            done()
        })
    });

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

    it('Deve informar quando o produto não possuir nome', function (done) {
        var p = {
            value: 12.5
        };

        request(url)
            .post('/product')
            .send(p)
            .expect(400)
            .end(function (err, res) {
                if (err) throw err;

                res.body.status.should.equal('error');
                res.body.message.should.equal('invalid data');

                done();
            });
    });

    it('Deve informar quando o produto nao possuir valor', function (done) {
        var p = {
            name: 'xone de cafe'
        };
        request(url)
            .post('/product')
            .send(p)
            .expect(400)
            .end(function (err, res) {
                if (err) throw err;

                res.body.status.should.equal('error');
                res.body.message.should.equal('invalid data');

                done();
            });
    });
});