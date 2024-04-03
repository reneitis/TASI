// unicsul - universidade cruzeiro do sul
// curso: cts analise e desenvolvimento de sistemas
// disciplina: topicos avancados de SI
// data: 26/02/2024
// autor: renata vieira
// descricao: programa que cria um websever com rotas incialmentee com o usso de callback e cim criação de rotas e abertura de arquivos


//importacao do modulo http, modeludo url 
const http = require('http');
const url = require('url');


//criar um sevidor http no qual envia uma mensagem:
var callback =  function(request, response) {

    //define o header com o tipo de resposta:
    response.writeHead(200, {"Content-type" : "text/plain"});

    // define os "endpoint" com parse da url:
    var parts = url.parse(request.url);

    //verificacao a rota e envia uma mensagem
    if (parts.path == "/"){
        response.end("pagina principal...");
   }else if(parts.path == "/rota1"){
        response.end("pagina da rota 1")
   }else if(parts.path == "/rota2"){
        response.end("pagina da rota 2");
   }else{
        response.end("pagina 494 - rota invalida" + parts.path)
   }

    //mensagem enviada para o cliente
    // response.end("webserver com callback");
};


//sevirdor http
 var server = http.createServer(callback);

// configurar o webserver: 
server.listen(4000)
console.log("[OK] - servidor iniciado em https://localhost:4000...")