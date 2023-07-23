const { default: mongoose } = require('mongoose')

const byProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    price: {
        type: Number,
        require: true,
    }
}, { timestamps: true });
const byProduct = mongoose.model('ByProducts', byProductSchema);

module.exports = byProduct