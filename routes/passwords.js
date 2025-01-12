const { savePassword, getPasswordsOfUser } = require("../controller/passwords")

const router = require("express").Router()

router.post("/passwords/:username", savePassword)
router.get("/passwords/:username", getPasswordsOfUser)

module.exports = router