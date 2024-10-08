const updateStudentGradeByCity = (students, city, newGrades) => students.filter((std) => std.location === city).map((std) => ({ ...std, grade: newGrades.filter((g) => g.studentId === std.id).map((g) => g.grade)[0] || 'N/A' }));
export default updateStudentGradeByCity;
