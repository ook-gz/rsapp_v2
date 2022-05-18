/*Rutas de la aplicación*/
/*Routes sirve para definir las rutas que el usuario puede visitar*/
//Nota: para crear rutas hay que ir de lo más general a lo más especifico
const { Router } = require('express'); //Importamos el router de express
const { appIndex, listarItems } = require('../controllers/app.controller');//importamos controller
//const { verificarToken } = require('../middleware/verificarToken');//importamos middleware
const { verificarAuth } = require('../middleware/verifAuth');//importamos middleware

const appRouter = Router();//guardamos el router en una variable

appRouter.get('/', verificarAuth, appIndex);
appRouter.get('/items', verificarAuth, listarItems);

module.exports = appRouter;//exportamos 