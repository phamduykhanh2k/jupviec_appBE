const { default: mongoose } = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    fullname: {
        type: String,
        require: true
    },
    email: String,
    phoneNumber: String,
    address: String,
    gender: String, //1: Nam 2: Nữ
    born: String,
    role: {
        type: String,
        require: true
    }
}, { timestamps: true });
const User = mongoose.model('Users', userSchema);

module.exports = User