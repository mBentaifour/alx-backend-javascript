// utils.js
// Create a new file and module

const Utils = {
  calculateNumber: function (type, a, b) {
    const num1 = Math.round(a);
    const num2 = Math.round(b);

    if (type === 'SUM') {
      return num1 + num2;
    }
    if (type === 'SUBTRACT') {
      return num1 - num2;
    }
    if (type === 'DIVIDE') {
      if (num2 === 0) {
        return 'Error';
      }
      return num1 / num2;
    }

    throw new Error('Invalid operation type');
  }
};

module.exports = Utils;

