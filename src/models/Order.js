const { default: mongoose } = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: String,
    phoneNumber: String,
    dateWork: Date,
    timeWork: Number,
    timeStart: String,
    timeEnd: String,
    address: String,
    note: String,
    totalPrice: Number,
    status: String,
    shippingStatus: String,
    products: Object,
}, { timestamps: true });

const Order = mongoose.model('Orders', orderSchema);

module.exports = Order