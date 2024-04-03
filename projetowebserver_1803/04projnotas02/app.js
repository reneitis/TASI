// unicsul - universidade cruzeiro do sul
// curso: cts analise e desenvolvimento de sistemas
// disciplina: topicos avancados de SI
// data: 11/03/2024
// autor: renata vieira
// descricao: o programa desenvolve um sistema de backend para processar informacoes em rotas (end points) de serviços e recebe informações atraves do protocolo http e retorna como resposta dados no serviço

const PORT = 4580;
const mediaMeta = 6.0;

const http = require('http');
const url = require('url');
const fs = require('fs');

const sever = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;


    if(path === '/notas'){

        const np1 = parseFloat(query.a1);
        const np2 = parseFloat(query.a2);


     if(isNaN(np1) || isNaN(np2)){
        res.writeHead(400, {'Content-Type' : "text/plain; charset=utf-8"});
        res.end(`ERRO 400 - valor das notas inválidas`);
      }else{
        const media = (np1 + np2)/2;
            if(media >= mediaMeta){
              fs.readFile('aprovado.html', 'utf-8', (err, data) => {
                if(err){
                    res.writeHead(500, {'Content-Type': "text/plain; charset=utf-8"});
                    res.end('500 - erro interno do servidor...');
                }else{
                     data = data.replace(`{media}`, media.toFixed(2));
                     res.writeHead(400, {'Content-Type' : "text/html; charset=utf-8"});
                     res.end(data);
                     }

            });
                        
                }else{
                    fs.readFile('reprovado.html', 'utf-8', (err, data) => {
                        if(err){
                            res.writeHead(500, {'Content-Type' : "text/plain; charset=utf-8"})
                            res.end('500 - erro interno do servidor...');

                }else{
                    data = data.replace(`{media}`, media.toFixed(2));
                    res.writeHead(400, {'Content-Type' : "text/html; charset=utf-8"});
                    res.end(data);
                    }
                })
                        
                    }
                
            }

    }else{
        fs.readFile('error404.html', 'utf-8', (err, data) =>{
            if (err){
                res.writeHead(500,{'Content-Type' : "text/plain; charset=utf-8"} )
                res.end('500 - Erro interno do servidor...');
            }else{
                res.writeHead(404, {'Content-Type' : "text/html; charset=utf-8"});
                res.end(data);      
            }
        })
     
    
    }


});

sever.listen(PORT, () => {
    console.log(`[ok] - servidor iniciado em http://localhost:${PORT}...`);
});