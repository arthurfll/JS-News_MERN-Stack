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

const findAll = async (req,res) => {
    const users = await userService.findAll()

    if(users.length === 0) {
        return res.status(400).send({message: "não há usuários cadastrados"})
    }

    res.send(users)
}

const findById = async (req,res) => {
    const id = req.params.id

    const user = await userService.findById(id)

    if(!user) {
        return res.status(400).send({message: "usuario nao encontrado"})
    }
    res.send(user)
}

module.exports = { create,findAll,findById }