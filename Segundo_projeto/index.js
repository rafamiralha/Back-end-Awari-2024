

//módulo interno do javascript
const http = require('http');

//método disponibilizado pelo módulo http.
const server = http.createServer((request, response) => {
if(request.url === '/'){
    //log do caminho local "localhost:3000/"
    console.log('Entrei na primeira rota');
    response.end('Olá mundo na primeira rota')
}
if(request.url === '/usuarios'){
    //log do caminho local "localhost:3000/usuarios"    
    console.log('Entrei na rota de usuários');
    response.end('Olá mundo na rota de usuários')
}

});

// 

server.listen(3000);

// instalado o express através do npm, pelo terminal por comando "npm install express"

/*
ARQUITETURA REST API
MÉTODOS DA ROTA:

POST -  cadastrar ( cadastrar um usuário por exemplo), enviar informações 
GET - usado para BUSCA (poderia ser /usuarios para puxar os usuários)
DELETE - usado para DELETAR informações ( poderia ser a exclusão de um usuário) 
PUT - usado para EDITAR a rota inteira (poderia ser editar a informação inteira de um usuário)
PATCH -  Também usado para EDITAR porém, um campo ou outro não o usuário inteiro, edição parcial.   

*/
//request - intenção
//response - resposta

