const express = require("express")
const cors = require("cors")
require("dotenv").config()
const userRouter = require("./routes/user")
const passwordsRouter = require("./routes/passwords")
const contactsRouter = require("./routes/contact")

const app = express()
app.use(express.json())
app.use(cors())

let PORT = process.env.PORT || 5000
require("./lib/db/db.connection")
app.get("/healthcheck", async (req, res) => {
    try {
        let health = {
            uptime: process.uptime(),
            cpu: process.cpuUsage(),
            memory: process.memoryUsage()
        }
        return res.status(200).send({ status: true, message: 'health of the node server', data: health })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: 'something happended on serve' })
    }
})

app.use("/api", userRouter)
app.use("/api", passwordsRouter)
app.use("/api", contactsRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))