//Importamos el manejador de errores
const { manejadorErrores } = require('../helpers/hndlrErrores');
const { verificarToken } = require('../helpers/hndlrToken');
//Creamos una variable para verificar el TOken
const verificarToken = (req, res, next) => {
    //buscamos en la request un header
    const token = req.header('authToken');
    //Verificamos que haya un header
    if(!token) return manejadorErrores(res, 'Acceso denegado');
    //Hacemos la comprobación del token
    try {
        //usamos el metodo verify para verificar si el token es correcto
        const authToken = await verificarToken(token, process.env.SECRET_KEY);
        //creamos una req nueva con la info del user
        req.user = authToken;
        //Si todo está correcto usamos el next() para dar permiso de seguir
        next()
    } catch (error) {
        manejadorErrores(res, 'Token no valido');
    }
}

//exportamos la función
module.exports = {
    verificarToken
}