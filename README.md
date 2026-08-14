API Connect
Objetivo

A API Connect é uma API REST desenvolvida como MVP para cadastro, consulta, atualização e exclusão de usuários. Os dados são armazenados temporariamente em memória.

Tecnologias
Node.js
Express
JavaScript
JSON
Git e GitHub
Execução

Instale as dependências:

npm install

Execute o servidor:

node server.js

O servidor utiliza a porta 3000.

Endpoints
Método	Endpoint	Função	Status
POST	/api/usuarios	Criar usuário	201 / 400
GET	/api/usuarios	Listar usuários	200
GET	/api/usuarios/:id	Buscar usuário	200 / 404
PUT	/api/usuarios/:id	Atualizar usuário	200 / 400 / 404
DELETE	/api/usuarios/:id	Excluir usuário	204 / 404
Exemplo de cadastro
{
  "nome": "Carlos Oliveira",
  "email": "carlos@example.com"
}
Testes realizados
POST com dados válidos → 201 Created
POST sem e-mail → 400 Bad Request
GET de usuários → 200 OK
GET com ID inexistente → 404 Not Found
Persistência

Os dados são armazenados em memória e são perdidos quando o servidor é encerrado.

Autor

Natanael Isidro
