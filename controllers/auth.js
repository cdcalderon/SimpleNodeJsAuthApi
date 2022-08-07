const { response } = require('express')
const { validationResult } = require('express-validator')

const createUser = (req, res = response) => {
    console.log(req.body)
    return res.json({
        ok: true,
        msg: 'User created /new',
    })
}

const loginUser = (req, res = response) => {
    const errors = validationResult(req)
    console.log(errors)

    return res.json({
        ok: true,
        msg: 'loginUser',
    })
}

const revalidateToken = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'revalidateToken',
    })
}

module.exports = {
    createUser,
    loginUser,
    revalidateToken,
}
