const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("aguardando a conexão com o banco de dados")

    mongoose.connect("mongodb+srv://arthurfll:arthurfll@cluster0.zkxjhl7.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true,useUnifiedTopology: true}
    ).then(() => console.log("conectado")).catch((error)=> console.log(error))
}


module.exports = connectDatabase