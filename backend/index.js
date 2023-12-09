const express = require("express")
const app = express()
const connectDatabase = require("./src/database/db")
const userRoute = require("./src/routes/user.route")


connectDatabase()
app.use(express.json())

app.use("/",userRoute)


app.listen(8888)