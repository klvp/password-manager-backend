const Password = require("../models/passwords")
const { encrypt, decrypt } = require("../lib/cryptr/index")
const User = require("../models/user")

module.exports.savePassword = async (req, res) => {
    try {
        const {
            body: { userid, passwordfor, password },
            params: { username }
        } = req
        let user = await User.findOne({ username })
        if (!user) {
            return res.status(404).send({ status: false, message: "User not exist" })
        }
        let newPassword = new Password({
            username,
            userid,
            passwordfor,
            password: await encrypt(password)
        })
        let savedPassword = await newPassword.save()
        return res.send({ message: "password saved", data: savedPassword })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "something happened", error })
    }
}

module.exports.getPasswordsOfUser = async (req, res) => {
    try {
        const {
            params: { username }
        } = req
        let user = await User.findOne({ username })
        if (!user) {
            return res.status(404).send({ status: false, message: "User not exist" })
        }
        let savedPasswords = await Password.find({ username })
        let result = await Promise.all(savedPasswords.map(async (item) => {
            let { passwordfor, password, userid } = item
            let originalPassord = await decrypt(password)
            return {
                userid,
                password: originalPassord,
                passwordfor
            }
        }))
        return res.send({
            message: "Passwords",
            data: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "something happened", error })
    }
}