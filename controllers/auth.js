const createUser = (req, res = response) => {
    return res.json({
        ok: true,
        msg: 'User created /new',
    })
}

module.exports = {
    createUser,
}
