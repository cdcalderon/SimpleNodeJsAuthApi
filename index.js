const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// CORS
app.use(cors())

// Public Directory
app.use(express.static('public'))

// read body parse
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
