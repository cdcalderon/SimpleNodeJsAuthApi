const { Router } = require('express')
const { createUser } = require('../controllers/auth')

const router = Router()

// Create new user
router.post('/new', createUser)

// Validate token
router.get('/renew', (req, res) => {
    return res.json({
        ok: true,
        msg: 'validate token /renew',
    })
})

module.exports = router
