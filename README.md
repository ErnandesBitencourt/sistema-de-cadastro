# sistema-de-cadastro


Concluído. 

### Sobre o Projeto

O projeto é tem como objetivo de pegar e enviar informações para o banco de dados MySQL via  API(API REST). Dentro disso, os endpoints funcionam a partir de lógicas de,
listagem de clientes cadastrados, criar cadastro, editar cadastro e deletar cadastro.
O código foi escrito a partir do paradigma de Programação Orientada à Objeto, buscando a utilização de conceitos de Clean Architecture e Clean Code. Deploy do projeto feito no Gihube Pages


### Link do projeto
* https://ernandesbitencourt.github.io/sistema-de-cadastro/

### Funcionalidades 

- Criar cadastro
- Lista de clientes cadastrados 
- Editar cadatro
- Deleatar cadastro


### Tecnologias Utilizadas:

- Node.Js
- Javascript
- axios
- react-router-dom
- styled-components
- Deploy feito no gitHub pages : gh-pages

### Framework

-React

### Banco de dados 

 * https://github.com/ErnandesBitencourt/sistema-de-cadastro-back
 
### Home Page


![image](https://user-images.githubusercontent.com/80565676/186289975-a41120cc-4d94-40c2-9fcb-b465cfea73e4.png)


### Documentação da API 

- Mostra todos os clientes cadastrados.

* GET  https://bemol-cadastro.herokuapp.com/user/allUsers

![lista-de-clients](https://user-images.githubusercontent.com/80565676/187035649-5ebfaaf0-02f5-4db5-b3ee-1c3c1ea4023d.PNG)




-Criar cadastro.

* POST https://bemol-cadastro.herokuapp.com/user/createUser

![image](https://user-images.githubusercontent.com/80565676/186039478-60188eaf-f38d-4f80-acdf-fa96b70ea7e5.png)





- Editar Cadastro.

* PUT  https://bemol-cadastro.herokuapp.com/user/edit/:id
 * Content-Type: application/json
 
Exemplo:
* PUT  https://bemol-cadastro.herokuapp.com/user/edit/1661189015439

![image](https://user-images.githubusercontent.com/80565676/186039772-9bd8f1e6-8321-43d8-97a6-9ab2a20b66de.png)


- Deletar cadastro
* DELETE   https://bemol-cadastro.herokuapp.com/user/deleteUser/:id


Exemplo:
* DELETE   https://bemol-cadastro.herokuapp.com/user/deleteUser/1660945325562

![image](https://user-images.githubusercontent.com/80565676/186039860-2f7b86a1-f223-43c6-9921-440b360c6947.png)






### Desenvolvido por 
Ernandes Bitencourt
