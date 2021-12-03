

let id = 1

class Ingredientes {
    constructor(nome, preco, quantidade, unidade, observacao) {
        this.nome = nome,
        this.preco = preco,
        this.quantidade = quantidade,
        this.unidade = unidade,
        this.observacao = observacao
        this.ativo = 1
    }
    

    isNumber(el) {
        if(typeof el == 'number') {
            return el
        }
        else {
            throw new Error("Este elemento não é um número")
        }
    }

    isBool(el) {
        if(typeof el == 'boolean') {
            return el
        }
        else {
            throw new Error("Este elemento não é booleano")
        }
    }


}

module.exports = Ingredientes