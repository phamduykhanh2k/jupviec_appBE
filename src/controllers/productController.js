const Product = require('../models/Product.js')

const getAllProductAPI = async (req, res) => {
    const results = await Product.find({})

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const getProductAPI = async (req, res) => {
    let id = req.params.id;

    const results = await Product.findOne({ _id: id });

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const updateProductsAPI = async (req, res) => {
    let data = req.body;

    const results = await Product.updateOne({ _id: data._id }, {
        name: data.name,
        image: data.image,
        price: data.price,
        category: data.category,
        description: data.description,
    })

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postProductAPI = async (req, res) => {
    let { name, image, price, category, description } = req.body;

    const product = await Product.create({
        name: name,
        image: image,
        price: price,
        category: category,
        description: description
    })

    return res.status(200).json({
        errorCode: 0,
        data: product
    })
}

const deleteProductsAPI = async (req, res) => {
    let productId = req.params.id;
    const result = await Product.deleteOne({ _id: productId });
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

module.exports = { getAllProductAPI, postProductAPI, getProductAPI, updateProductsAPI, deleteProductsAPI }