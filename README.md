# Introdução

Este repositório se trata um projeto de final de módulo do Curso de Web dev do Resilia. 
O projeto tem como intuito desenvolver nossas habilidades no desenvolvimento de APIs Rest.
esta API faz parte de um conjunto de APIs que no fim formaram uma grande API de uma hamburgueria ficticia.

# A API

API desenvolvida por mim será responsável pela <b>criação</b>, <b>visualização</b>, <b>atualização</b> e 
<b>deleção</b> de informações ligadas aos ingredientes armazenados pela hamburgueria.

# Banco de dados

Para ser feita a API foi preciso criar um pequeno banco de dados com as informações que um ingrediente possui. Banco consiste nas seguintes colunas:
    - "ID"
    - "NOME" 
    - "PRECO" 
    - "QUANTIDADE" 
    - "UNIDADE" 
    - "OBSERVACAO" 
    - "ATIVO" 
A Coluna ID armazenará um identificador unico para o ingrediente. Isso é responsável pela unicidade de cada registro;
A Coluna NOME  armazena o nome do Ingrediente. Ex: Pão, Sal, Chocolate...;
A Coluna PRECO, como o nome já diz, armazena o preço do Ingrediente;
A Coluna QUANTIDADE armazena a quantidade de Produto no estoque;
A Coluna UNIDADE armazena a unidade do que será atrelada ao produto. Ex: Saco, KG, UN...;
A Coluna OBSERVAÇÃO armazena alguma observação sobre o produto.
A Coluna ATIVOA armazena 0 ou 1. 0 o Produto não está ativo e 1 o Produto está ativo.

O Banco de dados utilizado foi o SQLITE.

#EM CONSTRUÇÃO...





