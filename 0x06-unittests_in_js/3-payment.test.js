// 3-payment.test.js

const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM and the correct arguments', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    
    // Appel de la fonction que nous testons
    sendPaymentRequestToApi(100, 20);
    
    // Vérification que le spy a bien été appelé avec les bons arguments
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restorer le spy après l'utilisation
    spy.restore();
  });
});

