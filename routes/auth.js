const { Router } = require('express')
const { check } = require('express-validator')
const { createUser, loginUser, revalidateToken } = require('../controllers/auth')

const router = Router()

// Create new user
router.post('/new', createUser)

// Login user
router.post(
    '/',
    [
        check('email', 'email is required').isEmail(),
        check('password', 'password strenght not met').isLength({ min: 6 }),
    ],
    loginUser
)

// Validate token
router.get('/renew', revalidateToken)

module.exports = router
