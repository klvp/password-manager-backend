const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 15
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 15
    }
}, { timestamps: true })

module.exports = mongoose.model("users", userSchema)