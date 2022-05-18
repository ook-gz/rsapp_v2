//Modulo para crear Token
const { sign, verify } = require('jsonwebtoken');
//const { manejadorErrores } = require('../helpers/hndlrErrores');

//Creamos el Token
const crearToken = async (payload, key, tiempo) => {
   return sign(payload, key, {expiresIn: tiempo});
}

const verificarToken = async (token, scrtKey) => {
    //Retornamos la función con el metodo verify que comprueba el token + la clave
    return verify(token, scrtKey); 
}

//Exportamos funciones
module.exports = {
    crearToken, verificarToken
}