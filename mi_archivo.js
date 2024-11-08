const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'Formulario-Ikkert', 'formulario.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/style.css') {
        fs.readFile(path.join(__dirname, 'Formulario-Ikkert', 'style.css'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(content);
        });
    }
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});

