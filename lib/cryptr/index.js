const Cryptr = require('cryptr');
const cryptr = new Cryptr(
    process.env.SECRET_CRYPT_KEY,
    { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 10 }
);

module.exports.encrypt = async (password) => {
    return cryptr.encrypt(password)
}
module.exports.decrypt = async (encriptedPassword) => {
    return cryptr.decrypt(encriptedPassword)
}