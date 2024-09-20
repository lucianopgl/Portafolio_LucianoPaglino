const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.redirect('/home'); // redireccion
});
app.get('/home', (req, res) => {
res.send('Página de Inicio!');
});
app.get('/aboutus', (req, res) => {
res.send('Página de Acerca!');
});
app.use('', (req, res) => {
res.send('Página no econtrada!');
});
let port = 3000
app.listen(3000, () => {
console.log(`Aplicacion Hola Mundo
escuchando en el puerto ${port}`);
});