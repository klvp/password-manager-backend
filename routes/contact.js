const { saveContact, getContacts, getContactByNumber, updateByNumber, deleteByNumber } = require("../controller/contact.js")

const router = require("express").Router()

router.post("/contact", saveContact)
router.get("/contact", getContacts)
router.get("/contact/:mobile", getContactByNumber)
router.patch("/contact/:mobile", updateByNumber)
router.delete("/contact/:mobile", deleteByNumber)

module.exports = router