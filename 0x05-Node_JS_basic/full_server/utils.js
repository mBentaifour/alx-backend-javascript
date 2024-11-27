import fs from 'fs';
import path from 'path';

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const content = data.split('\n');
      const fields = {};
      for (let i = 1; i < content.length; i++) {
        const row = content[i].split(',');
        if (row.length === 4) {
          const field = row[3];
          const firstname = row[0];
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }
      resolve(fields);
    });
  });
}

