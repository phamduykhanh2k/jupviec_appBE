const Order = require('../models/Order.js')
const Product = require('../models/Product.js')

const getAllOrderAPI = async (req, res) => {
    const results = await Order.find({})

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const getOrderAPI = async (req, res) => {
    let id = req.params.id;


    try {
        const order = await Order.findOne({ userId: id });
        return res.status(200).json({
            errorCode: 0,
            data: order
        })
    } catch (error) {
        return res.status(200).json({
            errorCode: 1,
            data: error
        })
    }

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postOrderAPI = async (req, res) => {

    let order = req.body;

    try {
        const results = await Order.create(order)
        return res.status(200).json({
            errorCode: 0,
            data: results
        })
    } catch (error) {
        return res.status(200).json({
            errorCode: 1,
            data: error
        })
    }
}

const updateOrderAPI = async (req, res) => {

}

const deleteOrderAPI = async (req, res) => {

}








module.exports = { getAllOrderAPI, updateOrderAPI, deleteOrderAPI, postOrderAPI, getOrderAPI }