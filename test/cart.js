var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');

describe('Cart', function () {
    var url = 'http://localhost:3000';

    it('criar carrinho', function (done) {

        var cart = {user_name: 'Usuario'};

        request(url)
            .post('/cart')
            .send(cart)
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                res.body.status.should.equal('success');
                res.body.cart.should.have.property('_id');
                done();
            });
    });
});

