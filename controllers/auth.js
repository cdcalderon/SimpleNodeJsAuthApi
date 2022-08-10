const { response } = require('express')
const { validationResult } = require('express-validator')

const createUser = (req, res = response) => {
    console.log(req.body)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        })
    }

    return res.json({
        ok: true,
        msg: 'User created /new',
    })
}

const loginUser = (req, res = response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped(),
        })
    }

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
