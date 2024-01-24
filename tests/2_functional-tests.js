const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  test('Test GET /convert 10L', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=10L')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal('10 litres converts to 2.64172 gallons', res.body.string);
          done();
        });
    });
    test('Test GET /convert 32g', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=32g')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal('invalid unit', res.text);
          done();
        });
    });
    test('Test GET /convert 3/7.2/4kg', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=3/7.2/4kg')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal('invalid number', res.text);
          done();
        });
    });
    test('Test GET /convert 3/7.2/4kilomegagram', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=3/7.2/4kilomegagram')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal('invalid number and unit', res.text);
          done();
        });
    });
    test('Test GET /convert kg', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert?input=kg')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal('1 kilograms converts to 2.20462 pounds', res.body.string);
          done();
        });
    });
});
