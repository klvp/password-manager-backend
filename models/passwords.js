const mongoose = require("mongoose")

const passwordSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 5,
        max: 15
    },
    userid: {
        type: String,
        required: true,
    },
    passwordfor: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model("passwords", passwordSchema)