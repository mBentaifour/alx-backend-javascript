// a new function named sendPaymentRequestToApi
// two argument totalAmount, and totalShipping
// function calls the Utils.calculateNumber
// 3-payment.js

const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
};

module.exports = { sendPaymentRequestToApi };

