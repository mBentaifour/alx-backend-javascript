const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';

  it('Correct status code?', (done) => {
    request.get(API_URL, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(API_URL, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
