const express = require("express")
const userRoute = require("./routes/user.route")

const app = express()

const port = 8888

app.use("/user",userRoute)

app.listen(8888, () => console.log(`servidor rodando na porta ${port}`)) 
