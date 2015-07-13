/**
 * Created by Alejandro on 09/07/2015.
 */
var should = require('should');
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');
describe('Home', function () {
    var url = 'http://localhost:3000';

    describe('Index', function () {
        it('Sever Status', function (done) {
            request(url)
                .get('/')
                .expect(200)
                .end(function (err, res) {
                    if (err) throw err;
                    res.body.status.should.equal('runing v2.0');
                    done();
                });
        });
    })
});