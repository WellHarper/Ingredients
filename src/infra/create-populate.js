const db = require('./bd')


const INGREDIENTE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "INGREDIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "PRECO" REAL,
    "QUANTIDADE" INTEGER,
    "UNIDADE" INTEGER,
    "OBSERVACAO" varchar(255),
    "ATIVO" BOOLEAN
  )`;

  const ADD_INGREDIENTE_DATA = `
  INSERT INTO INGREDIENTES  (ID, NOME, PRECO, QUANTIDADE, UNIDADE, OBSERVACAO, ATIVO)
  VALUES (1, 'Pão de Forma', 2, 18, 'UN', 'Pão de Teste', 1)
  `

  function criaTabela() {
    db.run(INGREDIENTE_SCHEMA, (error)=> {
       if (error) console.log(error.message);
    });
}


function populaTabela() {
    db.run(ADD_INGREDIENTE_DATA, (error)=> {
       if (error) console.log(error.message);
    });
}

db.serialize(()=> {
  criaTabela(),
  populaTabela()
});