// 3-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call calculateNumber with SUM, 100, 20', () => {
    // Créer un spy pour la fonction calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Appeler la fonction à tester
    sendPaymentRequestToApi(100, 20);

    // Vérifier que le spy a bien été appelé avec les bons arguments
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restaurer le spy pour éviter les comportements étranges dans les autres tests
    spy.restore();
  });
});

