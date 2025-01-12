const Contact = require("../models/contact")

module.exports.saveContact = async (req, res) => {
    try {
        const { body: { name, email, address, mobile } } = req
        let newContact = new Contact({
            ...req.body
        })
        let contact = await newContact.save()
        return res.status(200).send({
            message: "contact saved",
            data: contact._id
        })
    } catch (error) {
        return res.send({ message: "something happened" })
    }
}
module.exports.getContacts = async (req, res) => {
    try {
        let contacts = await Contact.find()
        return res.status(200).send({
            message: "contact saved",
            data: contacts
        })
    } catch (error) {
        return res.send({ message: "something happened" })
    }
}
module.exports.getContactByNumber = async (req, res) => {
    try {
        const { params: { mobile } } = req
        let contact = await Contact.findOne({ mobile: parseInt(mobile) })
        if (!contact) {
            return res.status(404).send({ message: "Record Not found" })
        }
        return res.status(200).send({
            message: "contact Found",
            data: contact
        })
    } catch (error) {
        return res.send({ message: "something happened" })
    }
}
module.exports.updateByNumber = async (req, res) => {
    try {
        const {
            params: { mobile: number },
            body: { address, mobile }
        } = req
        let contact = await Contact.findOne({ mobile: parseInt(number) })
        if (!contact) {
            return res.status(404).send({ message: "Record Not found" })
        }
        let result = await Contact.updateOne({ mobile: parseInt(number) }, {
            $set: {
                address,
                mobile
            }
        })
        return res.status(200).send({
            message: "contact updated",
            data: result
        })
    } catch (error) {
        return res.send({ message: "something happened" })
    }
}
module.exports.deleteByNumber = async (req, res) => {
    try {
        const {
            params: { mobile },
        } = req
        let deletedContact = await Contact.deleteOne({ mobile })
        return res.status(200).send({
            message: "contact deleted",
            data: deletedContact
        })
    } catch (error) {
        return res.send({ message: "something happened" })
    }
}
