var CryptoJS = require("crypto-js");

const encriptPass = async (password, key) => {
    const encrypt = await CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
    return encrypt;
}

const compararPass = async (encriptdPass, key) => {
    const encryptPass = await CryptoJS.AES.decrypt(encriptdPass, process.env.SECRET_KEY);
    return decriptPass = await bytes.toString(CryptoJS.enc.Utf8);
}

module.exports = {
    encriptPass, compararPass
}