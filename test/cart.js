var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');

describe('Cart', function () {
    var url = 'http://localhost:3000';

    it('criar carrinho', function (done) {
        request(url)
            .post('/cart')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
                res.body.status.should.equal('success');
                res.body.cart.should.have.property('_id');
                done();
            });
    });
});

