const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.status(204).json({
        ok: true,
        uid: '1234',
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
