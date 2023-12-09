const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    nome : {
        type: String,
        required: true
    },
    usuario : {
        type: String,
        required: true ,
        unique: true        
    },
    email : {
        type: String,
        required: true ,
        unique: true       
    },
    senha : {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User",UserSchema)
module.exports = User