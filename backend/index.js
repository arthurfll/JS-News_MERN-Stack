const express = require("express")
const app = express()
const userRoute = require("./src/routes/user.route")

app.use(express.json())

app.use("/",userRoute)


app.listen(8888)