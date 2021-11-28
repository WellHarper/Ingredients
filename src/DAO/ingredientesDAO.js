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

}

module.exports = ingredientesDAO