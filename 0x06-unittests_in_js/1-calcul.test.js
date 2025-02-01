//contains test cases of this function
//Usage of describe will help you to organize your test cases


const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return the difference of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return the division of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error'); // Corrigé
  });

  it('should throw an error for an invalid type', () => {
    assert.throws(() => {
      calculateNumber('MULTIPLY', 1.4, 4.5);
    }, new Error('Invalid operation type')); // Corrigé
  });
});

