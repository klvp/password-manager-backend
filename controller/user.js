const User = require("../models/user")
const { genHashPassword, isPasswordCorrect } = require("../utility.js/helper")

module.exports.userRegisteration = async (req, res) => {
    try {
        const { body: { username, password } } = req
        let user = await User.findOne({ username })
        if (user) {
            return res.status(400).send({ status: false, message: "User already exist" })
        }
        const newUser = new User({
            username,
            password: await genHashPassword(password)
        })
        await newUser.save()
        return res.status(200).send({ message: "user registered", data: newUser })

    } catch (error) {
        return res.status(500).send({ message: "something happened", error })
    }
}

module.exports.userLogin = async (req, res) => {
    try {
        const { body: { username, password } } = req
        let user = await User.findOne({ username })
        if (!user) {
            return res.status(404).send({ status: false, message: "invalid password or username" })
        }
        if (! await isPasswordCorrect(password, user.password)) {
            return res.status(400).send({ message: "invalid password or username" })
        }

        return res.status(200).send({ message: "correct credentials", data: user })

    } catch (error) {
        return res.status(500).send({ message: "something happened", error })
    }
}