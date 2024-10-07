const getStudentsByLocation = (list, city) => list.filter((obj) => obj.location === city);
export default getStudentsByLocation;
