//Importamos el manejador de errores
const { manejadorErrores } = require('../helpers/hndlrErrores');
const { verificarToken } = require('../helpers/hndlrToken');
//Creamos una variable para verificar el TOken
const verificarAuth = async (req, res, next) => {
    //buscamos en la request un header
    const token = req.header('authToken');
    //Verificamos que haya un header
    if(!token) return manejadorErrores(res, 'Acceso denegado');

    try {
        //comprobación del token
        const authToken = await verificarToken(token, process.env.SECRET_KEY);
        //observamos que se envia por consola
        console.log(authToken);
        //Creamos una variable con los datos del user
        req.user = authToken;
        //Si todos los datos son correcto damos autorización de seguir
        next();
    } catch (error) {
        //Si el token no es valido enviamos un error
        manejadorErrores(res, 'Token no valido');
    }
}

//exportamos la función
module.exports = {
    verificarAuth
}