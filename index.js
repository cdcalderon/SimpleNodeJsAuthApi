const express = require('express')
const cors = require('cors')
const app = express()

// CORS
app.use(cors())

// read body parse
app.use(express.json())

require('dotenv').config()

app.use('/api/auth', require('./routes/auth'))

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
