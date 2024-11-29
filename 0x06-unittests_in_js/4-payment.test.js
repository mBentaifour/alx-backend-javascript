// 4-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateNumberStub;

  beforeEach(() => {
    // Créer un spy pour console.log
    consoleSpy = sinon.spy(console, 'log');

    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    // Restaurer le spy
    consoleSpy.restore();

    // Restaurer le stub
    calculateNumberStub.restore();
  });

  it('should call calculateNumber with SUM, 100, 20 and log the correct message', () => {
    // Appeler la fonction sendPaymentRequestToApi avec 100 et 20
    sendPaymentRequestToApi(100, 20);

    // Vérifier que calculateNumber a bien été appelé avec les bons arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Vérifier que console.log a bien été appelé avec le bon message
    expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});

