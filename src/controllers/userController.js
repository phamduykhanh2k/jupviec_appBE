const User = require('../models/User.js')

const getAllUserAPI = async (req, res) => {
    const results = await User.find({})

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const getUserAPI = async (req, res) => {
    let username = req.body.username;

    const results = await User.findOne({ username: username });

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postUserAPI = async (req, res) => {
    let { username, password, fullname } = req.body;

    const user = await User.create({
        username: username,
        password: password,
        role: 'Khách hàng',
        fullname: fullname,
    })

    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

const updateUserAPI = async (req, res) => {
    let { _id, username, password, fullname, email, phoneNumber, address, gender, born, role } = req.body;

    try {
        const user = await User.updateOne({ _id: _id }, {
            username: username,
            password, password,
            fullname: fullname,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            gender: gender,
            born: born,
            role: role
        })

        return res.status(200).json({
            errorCode: 0,
            data: user
        })
    } catch (error) {
        return res.status(200).json({
            errorCode: 1,
            data: error
        })
    }
}

const deleteUserAPI = async (req, res) => {
    let userId = req.body.userId;

    let result = await User.deleteOne({ _id: userId })

    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

module.exports = {
    getAllUserAPI, getUserAPI, postUserAPI, updateUserAPI, deleteUserAPI,
}