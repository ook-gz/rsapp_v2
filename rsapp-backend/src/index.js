/*Configuración del server*/
//importamos los paquetes
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

//guardamos express en una constante
const app = express();

//conexion a base de datos
const db = require('./config/bd');

//configuración del server
app.set('port', process.env.PORT || 3005);//definimos una variable para el puerto

//configuracion de las CORS
const corsOptions = {
  origin: '*', // Reemplazar con dominio
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//middlewares
app.use(cors(corsOptions))//Cross Origins no sé que
app.use(morgan('dev'));//muestra las peticiones por consola
app.use(express.json());//indicamos que el formato será json
app.use(express.urlencoded({extended : false}));//En caso de recibir info por un form

//Rutas
app.get('/', (req, res) => {//definimos la ruta index
    res.send('Backend RSApp v2');
  });

//importamos rutas
const authRouter = require('./routes/auth.routes');
const appRouter = require('./routes/app.routes');

//hacemos uso de las rutas
app.use(authRouter);
app.use('/rsapp', appRouter);
//Iniciamos el server
app.listen(app.get("port"));
console.log(`Servidor en puerto ${app.get('port')}`);

//exportamos la configuración del server
module.exports = app;    