const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');


describe('sendPaymentRequestToApi', function () {
    it('should call Utils.calculateNumber with correct arguments', function () {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnce(spy);
        sinon.assert.calledWithExactly(spy, 'SUM', 100, 20);
        spy.restore();
    });
});
