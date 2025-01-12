const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        length: 10,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("contacts", contactSchema)