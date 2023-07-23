const ByProduct = require('../models/ByProduct')

const getAllByProductAPI = async (req, res) => {
    const results = await ByProduct.find({})

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const getByProductAPI = async (req, res) => {
    let id = req.params.id;

    const results = await ByProduct.findOne({ _id: id });

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const updateByProductsAPI = async (req, res) => {
    let data = req.body;

    const results = await ByProduct.updateOne({ _id: data._id }, {
        name: data.name,
        price: data.price
    })

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postByProductAPI = async (req, res) => {
    let { name, price } = req.body;

    const byProduct = await ByProduct.create({
        name: name,
        price: price
    })

    return res.status(200).json({
        errorCode: 0,
        data: byProduct
    })
}

const deleteByProductsAPI = async (req, res) => {
    let byProductId = req.params.id;
    const result = await ByProduct.deleteOne({ _id: byProductId });
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

module.exports = { getAllByProductAPI, postByProductAPI, getByProductAPI, updateByProductsAPI, deleteByProductsAPI }