// utils.js
// Create a new file and module

const Utils = {
  calculateNumber: (type, a, b) => {
    if (type === 'SUM') {
      return a + b;
    } else if (type === 'SUBTRACT') {
      return a - b;
    } else if (type === 'MULTIPLY') {
      return a * b;
    } else {
      return 0;
    }
  }
};

module.exports = Utils;

