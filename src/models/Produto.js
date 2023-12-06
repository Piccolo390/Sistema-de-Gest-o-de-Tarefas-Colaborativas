// models/UserModel.js
const mongoose = require('mongoose');

// Defina o esquema do usuário
const produtoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
});

// Crie e exporte o modelo de usuário com base no esquema
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
