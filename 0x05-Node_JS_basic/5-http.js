const http = require('http');
const fs = require('fs');
const path = require('path');

function countStudents(database) {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== ''); // Supprime les lignes vides
        const students = lines.slice(1).map((line) => line.split(',')); // Ignore l'en-tête
        const fields = {};

        students.forEach((student) => {
          if (student.length >= 4) {
            const field = student[3];
            const name = student[0];
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(name);
          }
        });

        const totalStudents = students.length;
        const result = [`Number of students: ${totalStudents}`];

        Object.keys(fields).forEach((field) => {
          result.push(
            `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
          );
        });

        resolve(result.join('\n'));
      }
    });
  });
}

// Créez un serveur HTTP
const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    const database = process.argv[2];
    if (!database) {
      res.end('Cannot load the database');
      return;
    }

    countStudents(database)
      .then((result) => {
        res.end(`This is the list of our students\n${result}`);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

// Le serveur écoute sur le port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Exporter l'application
module.exports = app;

