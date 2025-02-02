const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with SUM, 100, 20', function () {
    // Création d'un espion sur Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Exécution de la fonction à tester
    sendPaymentRequestToApi(100, 20);

    // Vérification de l'appel correct
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restauration de la fonction originale
    spy.restore();
  });
});

