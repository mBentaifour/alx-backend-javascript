//Combining descriptions
//a and b are always number
//SUM, SUBTRACT, or DIVIDE (string) Operations

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
      return 'Error'; // Correction ici : On retourne bien "Error"
    }
    return num1 / num2;
  }

  throw new Error('Invalid operation type'); // On s'assure que ça lève une erreur
}

module.exports = calculateNumber;

