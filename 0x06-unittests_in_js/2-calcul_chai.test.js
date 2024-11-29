// 2-calcul_chai.test.js
// Rewrite the test suite, using expect from Chai


const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');


describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 10 when inputs are 4.6 and 4.5', () => {
      expect(calculateNumber('SUM', 4.6, 4.5)).to.equal(10);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 2 when inputs are 4.5 and 3.4', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 3.4)).to.equal(2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 100 when inputs are 100.4 and 1', () => {
      expect(calculateNumber('DIVIDE', 100.4, 1)).to.equal(100);
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for an invalid type', () => {
      expect(() => calculateNumber('MULTIPLY', 1, 2)).to.throw('Invalid operation type');
    });
  });
});
