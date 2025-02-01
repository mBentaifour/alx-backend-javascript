// Basic test with Mocha and Node assertion library

const calculateNumber = (type, x, z) => {
  const xRound = Math.round(x);
  const zRound = Math.round(z);

  if (type === 'SUBTRACT') {
    return xRound - zRound;
  }

  if (type === 'DIVIDE') {
    if (xRound === 0) {
      return 'Error';
    }
    return xRound / zRound;
  }

  return xRound + zRound;
};

module.exports = calculateNumber;
