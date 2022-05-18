const { client } = require('../config/bd');
//Importamos el manejador de errores
const { manejadorErrores } = require('../helpers/hndlrErrores');
//handler para encriptar
const { encriptPass, compararPass } = require('../helpers/hndlrPass');
//Importamos el handler del token
const { crearToken, verificarToken } = require('../helpers/hndlrToken');
const { enviarMail } = require('../helpers/hndlrMail');
//Prisma
const { PrismaClient } = require('@prisma/client');
//guardamos el constructor de prisma
const prisma = new PrismaClient();

const login = async (req, res) => {
    try {
        //extraemos correo y password del req body
        const { correo, contraseña } = req.body; 
        //consultamos el modelo
        const resultado = await prisma.huespedes.findFirst({
            where:{
                //buscamos los datos enviados del form
                OR: [{correo: correo}, {passwrd: contraseña}]
            }
        });
        //imprimimos mensaje de error
        if (resultado === null){
            return manejadorErrores(res, 'Usuario inexistente');
        }

        //Creando el token
        const payload = {
            id: resultado.id_huesped,
            correo: resultado.correo, 
            habitacion: resultado.id_hab,
            nombre: resultado.nm_huesped,
            contraseña: resultado.passwrd
        };
        //clave para cifrar
        const scrtTkn = process.env.SECRET_KEY;
        //caducidad
        const caducTkn = "1d";
        //Creación del token
        const Token = await crearToken(payload, scrtTkn, caducTkn);

        try {
            //enviamos un header con la info del token y un json
            res.header('authToken', Token).json({
                error: false,
                Token
            });
        } catch (error) {
            //enviamos mensaje con el error
            return manejadorErrores(res, error);
        } 
    } catch (error) {
        res.send(error)
    }
}

const recuperarPass = async (req, res) => {
   //Sacamos el correo del req
    const {correo}  = req.body;
   //hacemos la consulta a la base de datos
   const resultado = await prisma.huespedes.findFirst({
    where:{
        //buscamos los datos enviados del form
        correo: correo,
    },
});
   //imprimimos mensaje de error
   if (resultado === null){
       return manejadorErrores(res, 'Usuario inexistente');
    }
    //creamos el secret key
    const scrtKey =  process.env.SECRET_KEY + resultado.passwrd;
    //Creando el token
    const payload = {
        id: resultado.id_huesped,
        correo: resultado.correo, 
    };
    //caducidad
    const caducTkn = '10m';
    //creamos la función para crear el token
    const passToken = await crearToken(payload, scrtKey, caducTkn);
    //creamos el link
    const link = `http://localhost:3000/recuperar-pass/${resultado.id_huesped}/${passToken}`;
    //envio del mail
    const destino = resultado.correo;
    
    let mailDetails = {
        from: 'rsapp.oficial@gmail.com',
        to:  destino,
        subject: 'RSApp: Reestablecer contraseña',
        html: `<p>Aqui está su link: </p> <a href="${link}">${link}</a><br>
                Este Link tiene una duración de 10 minutos`
    };
    //enviamos mail
    const mail = await enviarMail(mailDetails);


    res.json({
        msj:"Correo enviado",
        link
    });
}

const nuevaPass = async (req, res) => {
    //sacamos el id y el token
    const {id, token} = req.params;
    //buscamos en la base de datos
    const resultado = await prisma.huespedes.findUnique({
        where: {
            id_huesped: parseInt(id)
        }
      });

    if (resultado === null){
        return manejadorErrores(res, 'Usuario inexistente');
    }

    try {
        const scrtKey =  process.env.SECRET_KEY + resultado.passwrd;
        //verificamos el token
        const passTkn = await verificarToken(token, scrtKey);
        //recibimos la contraseña y verificamos que sean iguales
        const { nuevaPass, nuevaPass2 } = req.body;
        if( nuevaPass !== nuevaPass2){
            return manejadorErrores(res, 'La contraseña no coincide')
        }
        // actualizamos el campo
        const update = await prisma.huespedes.update({
            where: { id_huesped: parseInt(id) },
            data: { passwrd: nuevaPass },
          });

        if (update === null){
            return manejadorErrores(res, 'Error al cambiar la contraseña');
        }

        res.json({
            msj:"Contraseña actualizada"
        });
        
    } catch (error) {
         res.json(error);
    }
}

module.exports = {
      login, recuperarPass, nuevaPass
  }