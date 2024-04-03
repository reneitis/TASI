rê
reneitis
Disponível

Chico Coins — Hoje às 01:21
//*******************************************************
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro
// Curso: CTS Analise e Desenvolvimento de Sistemas
// Disciplina: Topicos Avançados de SI - I
// Autor: Marco Antonio dos Santos - Data: 11/03/2024
// Descrição: IMC Calculo
Expandir
IMC.txt
3 KB
﻿
//*******************************************************
// UNICSUL - Universidade Cruzeiro do Sul - Santo Amaro
// Curso: CTS Analise e Desenvolvimento de Sistemas
// Disciplina: Topicos Avançados de SI - I
// Autor: Marco Antonio dos Santos - Data: 11/03/2024
// Descrição: IMC Calculo
//*******************************************************


    const PORT = 3500;
   

    const http = require('http');
    const url = require('url');
    
    const server = http.createServer((req, res) => {

        const reqUrl = url.parse(req.url, true);
        const path = reqUrl.pathname;
        const query = reqUrl.query;

        if(path === '/imc'){
            const peso = parseFloat(query.p);
            const altura = parseFloat(query.a);
            
            if(isNaN(peso) || isNaN(altura)){
                res.writeHead(400, {'Content-Type': "text/plain; charset=utf-8"});
                res.end(`ERRO 400 - Valor de IMC invalido.`);
        }else{
            const imc = (peso/(altura*altura));
            if (imc < 18.5){
                res.writeHead(200, {'Content-type':"text/plan; charset=utf-8"});
                res.end (`Magreza:${imc.toFixed(2)}`);
            }if(imc >= 18.5 && imc <= 24.9){  
                res.writeHead(200,{'Content-Type':"text/plain; charset=utf-8"});
                res.end(`Normal:${imc.toFixed(2)}`);
            }if (imc >= 25.0 && imc <= 29.9) {
                res.writeHead(200,{'Content-Type':"text/plain; charset=utf-8"});
                res.end(`Sobrepeso:${imc.toFixed(2)}`);
            }if (imc >= 30.0 && imc <= 34.9){
                res.writeHead(200,{'Content-Type':"text/plain; charset=utf-8"});
                res.end(`Obesidade grau I:${imc.toFixed(2)}`);  
            }if (imc >= 35.0 && imc <= 39.9){
                res.writeHead(200,{'Content-Type':"text/plain; charset=utf-8"});
                res.end(`Obesidade grau II:${imc.toFixed(2)}`);
            }if (imc > 40.0){
                res.writeHead(200,{'Content-Type':"text/plain; charset=utf-8"});
                res.end(`Obesidade grau III:${imc.toFixed(2)}`);
            }else{
                
            }

    }

    }});   





    server.listen(PORT, () => {
        console.log(`[OK] - Servidor iniciado em http://localhost:${PORT} ...`);
    });

//http://localhost:3500/imc?p=70&a=1.80
IMC.txt
3 KB