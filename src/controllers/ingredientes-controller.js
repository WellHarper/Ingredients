const Ingredientes = require('../models/Ingredientes')


const ingredientes = (app, bd) => {

    const DAO = require('../DAO/ingredientesDAO')

    app.get("/ingredientes",(req, res)=> {
        const ingredientes = new DAO(bd)

        ingredientes.all()
        .then((resposta)=>res.json(resposta))
        .catch((error)=>res.json(error))

    })

    app.get("/ingredientes/:name",(req, res)=> {
        const ingredientes = new DAO(bd)

      const {name} = req.params

        ingredientes.select(name)
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

    app.patch("/ingredientes/quantidade",(req, res)=> {
        
        const ingredientes = new DAO(bd)
        
        const {nome, novaQuantidade} = req.body

        const novoIngrediente = new Ingredientes()

        try{
            
            novoIngrediente.isNumber(novaQuantidade)
            ingredientes.alterQuantity(nome, novaQuantidade)
            .then((resposta)=>{
                if(resposta.rows.length == 0) {
                    throw new Error("Ingrediente não existe")
                }
                else {
                    res.json(resposta)
                }
                
            })
            .catch((error)=>res.json({
                error: true,
                message: error.message
            }))

        }
        catch(e) {
            res.json({
                "error": true,
                "message": e.message
            })
        }

        
    })

    app.patch("/ingredientes/ativo",(req, res)=> {
        
        const ingredientes = new DAO(bd)
        
        const {nome, novaCondicao} = req.body

        const novoIngrediente = new Ingredientes()

        try{
            
            novoIngrediente.isBool(novaCondicao)
            ingredientes.alterActivField(nome, novaCondicao)
            .then((resposta)=>{
                if(resposta.rows.length == 0) {
                    throw new Error("Ingrediente não existe")
                }
                else {
                    res.json(resposta)
                }
                
            })
            .catch((error)=>res.json({
                error: true,
                message: error.message
            }))

        }
        catch(e) {
            res.json({
                "error": true,
                "message": e.message
            })
        }

        
    })

    app.patch("/ingredientes/preco",(req, res)=> {
        
        const ingredientes = new DAO(bd)
        
        const {nome, novoPreco} = req.body

        const novoIngrediente = new Ingredientes()

        try{
            
            novoIngrediente.isNumber(novoPreco)
            ingredientes.alterPrice(nome, novoPreco)
            .then((resposta)=>{
                if(resposta.rows.length == 0) {
                    throw new Error("Ingrediente não existe")
                }
                else {
                    res.json(resposta)
                }
                
            })
            .catch((error)=>res.json({
                error: true,
                message: error.message
            }))

        }
        catch(e) {
            res.json({
                "error": true,
                "message": e.message
            })
        }

        
    })

    app.delete("/ingredientes/:id",(req, res)=> {
        
        const ingredientes = new DAO(bd)
        
        const {id} = req.params


        // const novoIngrediente = new Ingredientes()

        try{
            
            // novoIngrediente.isNumber(id)
            ingredientes.delete(id)
            .then((resposta)=>{
                if(resposta.rows.length == 0) {
                    throw new Error("Ingrediente não existe")
                }
                else {
                    res.json({
                        "resposta":resposta
                    })
                }
                
            })
            .catch((error)=>res.json({
                error: true,
                message: error.message
            }))

        }
        catch(e) {
            res.json({
                "error": true,
                "message": e.message
            })
        }

        
    })



 
    



}

module.exports = ingredientes