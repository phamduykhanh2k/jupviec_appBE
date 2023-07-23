const express = require('express')
const routerAPI = express.Router()
const { getAllUserAPI, getUserAPI, postUserAPI, updateUserAPI, deleteUserAPI } = require('../controllers/userController');
const { getAllProductAPI, postProductAPI, getProductAPI, updateProductsAPI, deleteProductsAPI } = require('../controllers/productController');
const { getAllByProductAPI, postByProductAPI, getByProductAPI, updateByProductsAPI, deleteByProductsAPI } = require('../controllers/byProductController');
const { getAllOrderAPI, updateOrderAPI, deleteOrderAPI, postOrderAPI, getOrderAPI } = require('../controllers/orderController');


routerAPI.get('/users', getAllUserAPI)
routerAPI.post('/users', postUserAPI)
routerAPI.put('/user', updateUserAPI)
routerAPI.delete('/users', deleteUserAPI)
routerAPI.post('/user', getUserAPI)

routerAPI.get('/products', getAllProductAPI)
routerAPI.get('/products/:id', getProductAPI)
routerAPI.post('/products', postProductAPI)
routerAPI.put('/products', updateProductsAPI)
routerAPI.delete('/products/:id', deleteProductsAPI)

routerAPI.get('/byProducts', getAllByProductAPI)
routerAPI.post('/byProducts', postByProductAPI)
routerAPI.put('/byProducts', updateByProductsAPI)
routerAPI.delete('/byProducts/:id', deleteByProductsAPI)

routerAPI.get('/orders', getAllOrderAPI)
routerAPI.get('/order', getOrderAPI)
routerAPI.post('/orders', postOrderAPI)
routerAPI.put('/orders', updateOrderAPI)
routerAPI.delete('/orders', deleteOrderAPI)

module.exports = routerAPI