const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'formulario.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error en el servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if (req.url === '/style.css') {
        fs.readFile(path.join(__dirname, 'public', 'style.css'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error en el servidor');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                res.end(content);
            }
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const axios = require('axios');
const getProducts= async () => {
    response = await axios.get("https://fakestoreapi.com/products");
    console.log (response);
};

getProducts();