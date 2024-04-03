// unicsul - universidade cruzeiro do sul
// curso: cts analise e desenvolvimento de sistemas
// disciplina: topicos avancados de SI
// data: 26/02/2024
// autor: renata vieira
// descricao: programa que cira um webserver


const PORT = 9876

const http = require ('http');
const url = require('url');


const sever = http.createServer((req, res) => {

    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;


    if(path === "/"){
        res.writeHead(200, {'Content-type' : "text/plain; charset=utf-8"});
        res.end(`renata vieira`)
    }

        else if(path === "/emprestimo"){

        }


        else if(path === "/inss"){
            var sal = parseFloat(query.sal) //salario eh variavel
            var calculo

            if(isNaN(sal)){
                res.writeHead(400, {'Content-Type' : "text/plain; charset=utf-8"});
                res.end(`erro 400 - valor invalido!`);
            }else{
            
                
                if(sal <= 1412.00){
                calculo = sal * 0.075
                liquido = sal - calculo;
                

                    res.writeHead(200, {'Content-type' : "text-plain; charset=utf-8"});
                    res.end(`salario: ${sal.toFixed(2)}
                    \n inss: ${calculo.toFixed(2)}
                    \n salario + desconto do inss: ${liquido.toFixed(2)}`);
                }
                else if(sal <= 2666.88){
                    calculo = sal * 0.075 + 105.9;
                    liquido = sal - 1412.00;

    
                        res.writeHead(200, {'Content-type' : "text-plain; charset=utf-8"});
                        res.end(`salario: ${sal.toFixed(2)}
                        \n inss: ${calculo.toFixed(2)}
                        \n salario + desconto do inss: ${liquido.toFixed(2)}`);
                }
                else if(sal <= 4000.03){
                    calculo = sal * 0.12 + 105.9 + 112.92;
                    liquido = sal - 2666.68;

    
                        res.writeHead(200, {'Content-type' : "text-plain; charset=utf-8"});
                        res.end(`salario: ${sal.toFixed(2)}
                        \n inss: ${calculo.toFixed(2)}
                        \n salario + desconto do inss: ${liquido.toFixed(2)}`);
                }
                else if(sal <= 7786.02){
                    calculo = sal * 0.14 + 105.9 + 112.92 + 333.32;
                    liquido = sal - 4000.03;

    
                        res.writeHead(200, {'Content-type' : "text-plain; charset=utf-8"});
                        res.end(`salario: ${sal.toFixed(2)}
                        \n inss: ${calculo.toFixed(2)}
                        \n salario + desconto do inss: ${liquido.toFixed(2)}`);
                }

                else{
                res.writeHead(400, {'Content-Type' : "text/plain; charset=utf-8"});
                res.end(`valor invalido`);
                }

                

            }
        }





});


sever.listen(PORT, () => {
    console.log(`[ok ] servidor iniciado em http://localhost:${PORT}]`)
});

// http://localhost:9876/inss?sal=