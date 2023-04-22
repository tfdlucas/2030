const http = require('http');

http.createServer((requisicao, resposta) => {
    resposta.writeHead(200, { // Da como resposta escrito no cabecario, 200
        'Content-Type': 'text/plain' // Tipo de retorno, texto comum
    }); 
    resposta.write('Node Js\n'); // O usuario vai ver
    resposta.end(); // Finaliza a resposta
}).listen(1337); // Servidor esta sendo escutado na porta 1337