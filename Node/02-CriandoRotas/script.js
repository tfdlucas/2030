const http = require('http');
const porta = 3010;
const host = '127.0.0.1';

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url == '/') { // Barra é a requisicao raiz = root
        res.write('<h1>Seja bem vindo</h1>');
    } else if (req.url == '/curso') {
        res.write('<h1>Cursos</h1>');
    } else if (req.url == '/canal') {
        res.write('<h1>www.youtube.com</h1>');
    }
    res.end();
});

servidor.listen(porta, host,() => { console.log('Servidor rodando...')});
                //     host não é obrigatório