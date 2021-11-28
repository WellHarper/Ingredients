const Ingredientes = require('../models/Ingredientes')


const ingredientes = (app, bd) => {

    const DAO = require('../DAO/ingredientesDAO')

    app.get("/ingredientes",(req, res)=> {
        const ingredientes = new DAO(bd)

        ingredientes.all()
        .then((resposta)=>res.json(resposta))
        .catch((error)=>res.json(error))

    })

    app.post("/ingredientes",(req, res)=> {
        
        const ingredientes = new DAO(bd)
        
        const {nome, preco, quantidade, unidade, observacao} = req.body

        const novoIngrediente = new Ingredientes(nome, preco, quantidade, unidade, observacao)

        ingredientes.create(novoIngrediente)
        .then((resposta)=>res.json(resposta))
        .catch((error)=>res.json(error))
        
    })



}

module.exports = ingredientes