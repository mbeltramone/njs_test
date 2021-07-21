var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',function(req,res, next) {
 
  res.setHeader('Content-Type', 'application/json');

  var pelicula = req.body.pelicula;
  
  var respuesta = {
    nombre:'Martin',
    apellido:'Beltramone',
    edad:35,
    gusta:'N/A'
  };

  //Prueba de gusto de película
  switch(pelicula){
    case 'Hulk':
      respuesta.gusta='Si';
      break;
    case 'Batman':
      respuesta.gusta='Maso';
      break;
    default:
      respuesta.gusta='No se';
      break;
  }

  console.log(pelicula + "==>" + respuesta.gusta);

  res.status(200);
  res.send(JSON.stringify(respuesta));
});

module.exports = router;