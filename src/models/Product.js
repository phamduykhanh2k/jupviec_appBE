const { default: mongoose } = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String
    }
}, { timestamps: true });
const Product = mongoose.model('Products', productSchema);

module.exports = Product