// 4-payment.js

const Utils = require('./utils'); // Importer le module Utils

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi; // Exporter la fonction

