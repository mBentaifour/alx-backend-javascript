const getStudentIdsSum = (list) => list.reduce((counter, currentObj) => counter + currentObj.id, 0);
export default getStudentIdsSum;
