const userService = require("../services/user.service")

const create = async (req,res) => {
    const {
        nome       ,
        usuario    ,
        email      ,
        senha      ,
        avatar     ,
        background ,
    } = req.body

    if (!nome || !usuario || !email || !senha || !avatar || !background) {
        res.status(400).send("erro")
    }

    const user = await userService.create(req.body)

    if(!user) {
        return res.status(400).send({message: "Erro ao criar usuario"})
    }




    res.send({
        message:"usuario cadastrado",
        user: {
            id :user._id, 
            nome        ,
            usuario     ,
            email       ,
            senha       ,
            avatar      ,
            background  ,
        },
    })
}

module.exports = { create }