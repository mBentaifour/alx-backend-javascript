// 2-calcul_chai.js
// Rewrite the test suite, using expect from Chai

function calculateNumber(type, a, b) {
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

module.exports = calculateNumber;

