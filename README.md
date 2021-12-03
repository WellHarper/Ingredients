# Introdução

Este repositório se trata um projeto de final de módulo do Curso de Web dev do Resilia. 
O projeto tem como intuito desenvolver nossas habilidades no desenvolvimento de APIs Rest.
esta API faz parte de um conjunto de APIs que no fim formaram uma grande API de uma hamburgueria ficticia.

# A API

API desenvolvida por mim será responsável pela <b>criação</b>, <b>visualização</b>, <b>atualização</b> e 
<b>deleção</b> de informações ligadas aos ingredientes armazenados pela hamburgueria.

# Banco de dados

Para ser feita a API foi preciso criar um pequeno banco de dados com as informações que um ingrediente possui. Banco consiste nas seguintes colunas: 
    <br />
    <br />
    ID <br />
    NOME <br />
    PRECO <br />
    QUANTIDADE <br />
    UNIDADE <br />
    OBSERVACAO <br />
    ATIVO. <br /> 
    
A Coluna ID armazenará um identificador unico para o ingrediente. Isso é responsável pela unicidade de cada registro.
A Coluna NOME  armazena o nome do Ingrediente. Ex: Pão, Sal, Chocolate... <br />

A Coluna PRECO, como o nome já diz, armazena o preço do Ingrediente. <br />

A Coluna QUANTIDADE armazena a quantidade de Produto no estoque. <br />

A Coluna UNIDADE armazena a unidade do que será atrelada ao produto. Ex: Saco, KG, UN... <br />

A Coluna OBSERVAÇÃO armazena alguma observação sobre o produto. <br />

A Coluna ATIVOA armazena TRUE ou FALSE. <br />


O Banco de dados utilizado foi o SQLITE.

# ROTAS

Essas são as rotas criadas:

GET: http://localhost:3005/ingredientes/ -> Rota usada para pegar todos os registros
<br />
GET: http://localhost:3005/ingredientes/:name -> Rota usada para pegar registro especifico pelo nome
<br />
POST: http://localhost:3005/ingredientes/ -> Rota para criação do Ingrediente no banco. 
<br/>
PATCH: http://localhost:3005/ingredientes/preco -> Rota para alteração do preço. Para alterar o preço é necessário passar alguns parametros no body: o nome do ingrediente(nome) e o novo preço(novoPreco)
<br/>
PATCH: http://localhost:3005/ingredientes/quantidade -> Rota para alteração da quantidade do ingrediente no estoque. Para alterar a quantidade é necessário passar alguns parametros no body, como o nome do ingrediente(nome) e o nova quantidade(novaQuantidade)
<br/>
PATCH: http://localhost:3005/ingredientes/ativo -> Rota para alteração da condição do produto no estoque. Para alterar a condição é necessário passar alguns parametros no body, como o nome do ingrediente e a nova condição(novaCondicao). No caso deste campo, ele só recebe true ou false.

# INSTALAÇÃO

Para instalação do projeto é necessário ter o node instalado no seu computador. Com o nome instalado rode o comando no terminal:
*npm install*
este comando fará com que seja instalado todos os pacotes necessários para rodar o projeto





