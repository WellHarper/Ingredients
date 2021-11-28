const express = require('express')
const app = express()
const ingredientes = require('./src/controllers/ingredientes-controller')
const port = 3005
const bd = require('./src/infra/bd')


app.use(express.json())

ingredientes(app, bd)

app.listen(port, ()=>{
    console.log("rodando hihi")
})