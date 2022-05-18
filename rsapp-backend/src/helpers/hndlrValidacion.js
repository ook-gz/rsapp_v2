const { validationResult } = require('express-validator');

//Creamos la función para validar el resultado
const validarResult = (req, res, next) => {
  try {//si las validaciones no tienen errores manda el req
    validationResult(req).throw();
    next();//usamos el next como un "tienes permitido pasar"
  } catch (error) {//en caso de que no se cumplan las validaciones enviamos un mensaje de error
    res.status(400).json({ errors: error.array() });
  }
} 

//exportamos las funciones
module.exports = {
    validarResult
};