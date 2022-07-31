const { Router } = require('express')

const router = Router()

// Create new user
router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña es obligatoria').isLength({ min: 6 }),
        validarCampos,
    ],
    crearUsuario
)

// Validate token
router.get('/renew', (req, res) => {
    return res.json({
        ok: true,
        msg: 'validate token /renew',
    })
})

module.exports = router
