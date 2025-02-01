// 1-calcul.test.js
// Basic test with Mocha and Node assertion library

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return 10 when inputs are 4.6 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 4.6, 4.5), 10);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 2 when inputs are 4.5 and 3.4', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 3.4), 2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return Error when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return Infinity when dividing a large number by 1', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 100.4, 1), 100);
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for an invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), /Invalid operation type/);
    });
  });
});

