import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const database = process.argv[2]; // Récupérer le chemin du fichier

    readDatabase(database)
      .then((fields) => {
        const responseLines = ['This is the list of our students'];
        Object.keys(fields)
          .sort()
          .forEach((field) => {
            responseLines.push(
              `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
            );
          });
        res.status(200).send(responseLines.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const database = process.argv[2];
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(database)
      .then((fields) => {
        const students = fields[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;

