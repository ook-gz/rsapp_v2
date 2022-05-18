//importamos el paquete para validar
const { check } = require('express-validator');
const { validarResult } = require('../helpers/hndlrValidacion');

const validacionLogin = [//Valida que los campos enviados
    check('correo')
    .isEmail().withMessage('Debe ingresar un correo electronico'),
    // check('password')
    // .exists().not().isEmpty().withMessage('Inserte una contraseña'),//valida que no esté vacio
    (req, res, next) => {
        validarResult(req, res, next)
    }
];

const validacionNuevo = [//Valida que los campos enviados
    check('correo')
    .exists().not()
    .isEmpty().withMessage('El correo no debe estar vacio')
    .isEmail().withMessage('Debe ingresar un correo electronico'),//Valida que sea un email
    // check('password')
    // .exists().not().isEmpty().withMessage('Inserte una contraseña'),//valida que no esté vacio
    (req, res, next) => {//creamos uns función con esos parametros
        validarResult(req, res, next)//enviamos esos parametros a la función que mandamos a traer
    }
];

module.exports = {
    validacionLogin, validacionNuevo
};