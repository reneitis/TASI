// unicsul - universidade cruzeiro do sul
// curso: cts analise e desenvolvimento de sistemas
// disciplina: topicos avancados de SI
// data: 26/02/2024
// autor: renata vieira
// descricao: programa que cira um webserver


// carrega o modulo http
const http = require('http');

// cria um servidor http para envio de mensagem
var server = http.createServer(function( request, response){

    // define o header com o tipo de resposta
    response.writeHead(200, {"content-type":   "text/plain"});

    // mensagem de retorno
    response.end("ads da unicsul - santo amaro");


});

// configurando o servidor
server.listen(3000);
console.log("servir foi indicado em https://localhost:3000/ . . . .")