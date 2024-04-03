// unicsul - universidade cruzeiro do sul
// curso: cts analise e desenvolvimento de sistemas
// disciplina: topicos avancados de SI
// data: 25/03/2024
// autor: renata vieira
// descricao: o programa desenvolve um sistema de backend para processar informacoes em rotas (end points) de serviços e recebe informações atraves do protocolo http e retorna como resposta dados no serviço


const PORT = 4800;

const http = require ('http');
const url = require ('url');


const sever = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url, true) ;
    const path = reqUrl.pathname;
    const query = reqUrl.query;


        if(path ==="/"){
            res.writeHead(200, {'Content-type' : "text/plain; charset=utf-8"});
            res.end(`pagina inicial`);
        }

        else if(path === "/imc"){
            const peso = parseFloat(query.pes)
            const altura = parseFloat(query.alt)
        if(isNaN(peso) || isNaN(altura)){
            res.writeHead(400, {'Content-Type': "text/plain; charset=utf-8"});
            res.end(`ERRO 400 - Valor de IMC invalido.`);
        }else{
            const imc = peso / (altura * altura)
        
            if(imc < 18.5){
            res.writeHead(200, {'Content-type': "text/plain; charset=utf-8"});
            res.end(`peso: ${peso.toFixed(2)}
            \n altura: ${altura.toFixed(2)}
            \n seu imc é: magreza` );
        }

        else if(imc >= 18.5 && imc <= 24.9){
            res.writeHead(200, {'Content-Type': "text/plain; charset=utf-8"});
            res.end(`peso: ${peso.toFixed(2)}
            \n altura: ${altura.toFixed(2)}
            \n seu imc é: normal` );
        }
        else if(imc >= 24.9 && imc <= 29.9){
            res.writeHead(200, {'Content-Type': "text/plain; charset=utf-8"});
            res.end(`peso: ${peso.toFixed(2)}
            \n altura: ${altura.toFixed(2)}
            \n seu imc é: sobrepeso` );
        }
        else if(imc >=29.9 && imc <= 34.9){
            res.writeHead(200, {'Content-Type': "text/plain; charset=utf-8"});
            res.end(`peso: ${peso.toFixed(2)}
            \n altura: ${altura.toFixed(2)}
            \n seu imc é: obesidade grau 1` );
        }
        else if(imc >= 34.9 && imc <= 39.9){
            res.writeHead(200, {'Content-Type': "text/plain; charset=utf-8"});
            res.end(`peso: ${peso.toFixed(2)}
            \n altura: ${altura.toFixed(2)}
            \n seu imc é: obesidade grau 2` );
        }
        else if(imc >= 39.9 && imc <= 40.0){
            res.writeHead(200, {'Content-Type' : "text/plain; charset=utf-8"});
            res.end(`peso: ${peso.toFixed(2)}
            \n altura: ${altura.toFixed(2)}
            \n seu imc é: obesidade grau 3` );
        }else{

        }


        }

    }

    else if (path === "/dolar"){

        const dolar = parseFloat(query.d);
        const real = parseFloat(query.r);
            if(isNaN(dolar) || isNaN((real))){
                res.writeHead(400, {'Content-Type': "text/plain; charset=utf-8"});
                res.end(`ERRO 400 - Valor de Dolar invalido.`);
            }else {
                const conv = dolar*real;

                res.writeHead(200, {'Content-type': "text/plain; charset=utf-8"}); 
                res.end(`valor Dolar: ${dolar.toFixed(2)}
                 \nvalor em Reais:${real.toFixed(2)} 
                 \nvalor Convertido:${conv.toFixed(2)}`);
                 }


            }
    
            else if (path === "/notas"){
                const nota1 = parseFloat(query.n1);
                const nota2 = parseFloat(query.n2);
                const media = parseFloat(query.med);
        
                if (isNaN(nota1) || isNaN(nota2) || isNaN(media)){
                    res.writeHead(400, {'Content-Type': "text/plain; charset=utf-8"});
                    res.end(`ERRO 400 - Valor das notas invalidas.`);
                }else{
                    const calculo = (nota1+nota2)/2;
                    if (calculo >= media){
                        res.writeHead(200, {'Content-type': "text/plain; charset=utf-8"}); 
                        res.end(`Aprovado \nMedia: ${calculo.toFixed(2)}`);
                   }else{
                    res.writeHead(200, {'Content-type': "text/plain; charset=utf-8"}); 
                    res.end(`Reprovado \nMedia: ${calculo.toFixed(2)}`);
                    }
                }
                 
                            
                }

            
});

sever.listen(PORT, () => {
    console.log(`[ok] - servidor iniciado em http://localhost:${PORT}]`);

});

//http://localhost:4800/dolar?d=1&r=5.01
//http://localhost:4800/notas?n1=6.0&med=6.0&n2=5.0
//http://localhost:4800/imc?pes=80&alt=1.80