const express = require('express')
const app = express()
require('dotenv').config()

const carsRouter = require('./routes/routes.controller')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/livraria', carsRouter)

const PORT = process.env.PORT || 8080
app.listen(PORT, () =>{
    console.log("Servidor na porta 8080...")
})