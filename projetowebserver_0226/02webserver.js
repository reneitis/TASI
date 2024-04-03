// unicsul - universidade cruzeiro do sul
// curso: cts analise e desenvolvimento de sistemas
// disciplina: topicos avancados de SI
// data: 26/02/2024
// autor: renata vieira
// descricao: programa que cira um webserver

// carrega o modulo Http2ServerRequest
const http = require('http');

// funcao callback para o servidor http
var callback = function(request, response){
    
    // definir Header com o tipo de 
    response.writeHead(200, {"content-type" : "text/plain"});


    // mensagem de retorno
    response.end("ola call me back!");
    
}

// servidor http

var server = http.createServer(callback);


// configurando o servidor
server.listen(4500);
console.log("servir foi indicado em https://localhost:4500/ . . . .")