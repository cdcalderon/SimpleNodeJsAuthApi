const { Router } = require('express')

const router = Router()

// Create new user
router.post('/new', (req, res) => {
    return res.json({
        ok: true,
        msg: 'Create new user /new',
    })
})

// Validate token
router.get('/renew', (req, res) => {
    return res.json({
        ok: true,
        msg: 'validate token /renew',
    })
})

module.exports = router
