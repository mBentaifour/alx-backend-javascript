interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Mohammed',
  lastName: 'Bentaifour',
  age: 25,
  location: 'Casablanca'
};

const student2: Student = {
  firstName: 'Saad',
  lastName: 'Zakaria',
  age: 30,
  location: 'Namik'
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
studentsList.forEach(student => {
  const row = table.insertRow();
  row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
});
document.body.appendChild(table);
