const hasValuesFromArray = (set, arr) => arr.reduce((prev, curr) => prev && set.has(curr), true);
export default hasValuesFromArray;
