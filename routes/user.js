const { userRegisteration, userLogin } = require("../controller/user")

const router = require("express").Router()

router.post("/user/register", userRegisteration)
router.post("/user/login", userLogin)

module.exports = router