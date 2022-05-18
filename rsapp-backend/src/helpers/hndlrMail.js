const {createTransport, sendMail} = require("nodemailer");

const enviarMail = async (mailDetails) => {

    let transport = await createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        tls:{
            ciphers: "SSLv3",
            rejectUnauthorized:false
        },
        auth: {
            user: 'rsapp.oficial@gmail.com',
            pass: 'rzebuysmjbrubwwo'
        }
    });

    transport.sendMail(mailDetails, (err, data) => {
        if(!err) {
            console.log('Correo enviado');
        } else {
            console.log(`Error en la libreria: ${err.message}`);
        }
    })
}

module.exports = {
    enviarMail
}