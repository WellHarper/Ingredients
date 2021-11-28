//chama sqlite?
const sqlite3 = require('sqlite3').verbose();
//chama path do OS?
const path = require('path');
// Esse comando verifica se existe um bd no caminha especificado
// Se nao existir ele cria um com o nome dado
// Por isso a importancia de ser o mesmo caminho que o indicado no arquivo
// que cria e popula as tabelas
const caminhoArq = path.resolve(__dirname,'database.db')


const bd = new sqlite3.Database(caminhoArq);

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;