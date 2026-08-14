PI Connect
Objetivo

A API Connect é uma API REST desenvolvida como MVP para realizar o cadastro e consulta de usuários. Os dados são armazenados temporariamente em memória durante a execução do servidor.

Tecnologias utilizadas
Node.js
Express
JavaScript
JSON
Git e GitHub
Como executar o projeto

Instale as dependências:

npm install

Depois execute o servidor:

node server.js

O servidor será executado na porta 3000.

Endpoints
Método	Endpoint	Descrição	Status
POST	/api/usuarios	Cria um usuário	201 / 400
GET	/api/usuarios	Lista os usuários	200
GET	/api/usuarios/:id	Busca usuário por ID	200 / 404
Exemplo de cadastro
{
  "nome": "Carlos Oliveira",
  "email": "carlos@example.com"
}
Testes realizados
POST com nome e e-mail válidos → 201 Created
POST sem e-mail → 400 Bad Request
GET para listar usuários → 200 OK
GET com ID inexistente → 404 Not Found
Persistência

Os usuários são armazenados em memória durante a execução do servidor. Os dados são perdidos quando o servidor é encerrado.
