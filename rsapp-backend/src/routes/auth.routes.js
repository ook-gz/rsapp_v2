/*Routes sirve para definir las rutas que el usuario puede visitar*/
//Nota: para crear rutas hay que ir de lo más general a lo más especifico
const {Router} = require('express'); //Importamos el router de express
const {login, recuperarPass, nuevaPass} = require('../controllers/auth.controller');

//importamos archivo de validaciones
const { validacionLogin, validacionNuevo } = require('../validators/validaciones');

const authRouter = Router();//guardamos el router en una variable

authRouter.post('/', validacionLogin, login);
authRouter.post('/recuperar-pass', recuperarPass);
authRouter.post('/recuperar-pass/:id/:token', nuevaPass);


module.exports = authRouter;//exportamos 