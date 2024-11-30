const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Créer un spy pour console.log avant chaque test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restaurer le spy après chaque test
    consoleSpy.restore();
  });

  it('should log the correct total for 100 and 20', () => {
    // Appeler la fonction avec 100 et 20
    sendPaymentRequestToApi(100, 20);

    // Vérifier que console.log est appelé avec le bon message
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    // Vérifier que console.log est appelé une seule fois
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log the correct total for 10 and 10', () => {
    // Appeler la fonction avec 10 et 10
    sendPaymentRequestToApi(10, 10);

    // Vérifier que console.log est appelé avec le bon message
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;

    // Vérifier que console.log est appelé une seule fois
    expect(consoleSpy.calledOnce).to.be.true;
  });
});

