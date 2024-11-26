const http = require('http');

// Créez un serveur HTTP
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Code de réponse HTTP 200
  res.setHeader('Content-Type', 'text/plain'); // Réponse au format texte brut
  res.end('Hello Holberton School!');
});

// Le serveur écoute sur le port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Exporter l'application
module.exports = app;
