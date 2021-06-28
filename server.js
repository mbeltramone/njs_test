'use strict';
const express = require("express");
const app = express();

app.post('/', function (req, res) {
  res.send('[POST]MSG Post Raiz');
});

app.get('/', function (req, res) {
  res.send('[GET]MSG Get Raiz');
});

app.listen(8000, () => {
 console.log("El servidor está inicializado en el puerto 8000");
});
