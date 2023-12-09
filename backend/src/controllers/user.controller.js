const create = (req,res) => {
    const {nome} = req.body

    if (!nome) {
        res.status(400).send("erro")
    }
    res.send("ok")
}

module.exports = { create }