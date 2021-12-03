const e = require("cors")

class ingredientesDAO {
    constructor(bd) {
        this.bd = bd
    }


    all() {
        const ingredientes = new Promise((resolve, reject)=>{

            this.bd.all('SELECT * FROM INGREDIENTES', (err, rows)=> {
                if(err) {
                    reject({
                        "erro": true,
                        "mensagem": err.message
                    })
                }
                else {
                    resolve({
                        "erro": false,
                        "rows": rows
                    })
                }
            })

        })

        return ingredientes

    }

    select(name) {
        const ingredientes = new Promise((resolve, reject)=>{

            this.bd.all(`SELECT * FROM INGREDIENTES WHERE NOME = "${name}"` , (err, rows)=> {
                if(err) {
                    reject({
                        "erro": true,
                        "mensagem": err.message
                    })
                }
                else {
                    resolve({
                        "erro": false,
                        "rows": rows
                    })
                }
            })

        })

        return ingredientes

    }

    create(param) {

        const {nome, preco, quantidade, unidade, observacao, ativo } = param


        const ingrediente = new Promise((resolve, reject)=>{
            this.bd.run(`
            INSERT INTO INGREDIENTES  (NOME, PRECO, QUANTIDADE, UNIDADE, OBSERVACAO, ATIVO)
            VALUES (?, ?, ?, ?, ?, ?)
            `,[nome, preco, quantidade, unidade, observacao, ativo], (err)=> {
                if(err) {
                    reject({
                        "erro": true,
                        "mensagem": err.message
                    })
                }
                else {
                    resolve({
                        "erro": false,
                        "rows": param
                    })
                }
            })
        })

        return ingrediente

    }

    getQuantity(el) {
        const ingrediente = new Promise((resolve, reject)=>{
            this.bd.all(`SELECT COUNT(*) FROM INGREDIENTES WHERE NOME = "${el}"` , (err, rows)=> {
                if(err) {
                    reject({
                        "erro": true,
                        "mensagem": err.message
                    })
                }
                else {
                    resolve({
                        "erro": false,
                        "rows": rows
                    })
                }
            })

            
        })

        return ingrediente

    }

    alterQuantity(el, quantity) {
        const ingrediente = new Promise((resolve, reject)=>{
            this.bd.run(`UPDATE INGREDIENTES SET QUANTIDADE = "${quantity}" WHERE NOME = "${el}"` , (err)=> {
                if(err) {
                    reject({
                        "erro": true,
                        "mensagem": err.message
                    })
                }
                else {
                    this.select(el)
                    .then((resposta=> {
                        resolve({
                            "erro": false,
                            "rows": resposta.rows
                        })
                    }
                    )).catch((e)=>{
                        resolve({
                            "erro":"meu parceiro, tá dando ruim"
                        })
                    })
                   
                }
            })

            
        })

        return ingrediente


    }

    alterActivField(el, condition) {
        const ingrediente = new Promise((resolve, reject)=>{
            this.bd.run(`UPDATE INGREDIENTES SET ATIVO = "${condition}" WHERE NOME = "${el}"` , (err)=> {
                if(err) {
                    reject({
                        "erro": true,
                        "mensagem": err.message
                    })
                }
                else {
                    this.select(el)
                    .then((resposta=> {
                        resolve({
                            "erro": false,
                            "rows": resposta.rows
                        })
                    }
                    )).catch((e)=>{
                        resolve({
                            "erro":"meu parceiro, tá dando ruim"
                        })
                    })
                   
                }
            })

            
        })

        return ingrediente


    }

    alterPrice(el, preco) {
        const ingrediente = new Promise((resolve, reject)=>{
            this.bd.run(`UPDATE INGREDIENTES SET PRECO = "${preco}" WHERE NOME = "${el}"` , (err)=> {
                if(err) {
                    reject({
                        "erro": true,
                        "mensagem": err.message
                    })
                }
                else {
                    this.select(el)
                    .then((resposta=> {
                        resolve({
                            "erro": false,
                            "rows": resposta.rows
                        })
                    }
                    )).catch((e)=>{
                        resolve({
                            "erro":"meu parceiro, tá dando ruim"
                        })
                    })
                   
                }
            })

            
        })

        return ingrediente


    }

    delete(el) {
        const ingrediente = new Promise((resolve, reject)=>{
            this.bd.run(`DELETE FROM INGREDIENTES WHERE ID = "${el}"` , (err)=> {
                if(err) {
                    reject({
                        "erro": true,
                        "mensagem": err.message
                    })
                }
                else {
                    this.all(el)
                    .then((resposta=> {
                        resolve({
                            "erro": false,
                            "rows": resposta.rows
                        })
                    }
                    )).catch((e)=>{
                        resolve({
                            "erro":"meu parceiro, tá dando ruim"
                        })
                    })
                   
                }
            })

            
        })

        return ingrediente


    }
    

}

module.exports = ingredientesDAO