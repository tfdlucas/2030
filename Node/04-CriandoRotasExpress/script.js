// Usando Node puro

const http = require('http');
const porta = process.env.PORT

const servidor = http.createServer((req, res) => {
    res.statusCode = 200
    res.writeHead(200, {
        'Content-Type': 'text-plain'
    });
    res.end('Curso Node Js') // Retorno
})

servidor.listen(porta || 3300, () => { console.log('Servidor rodando') })
// Usar na porta padrao ou na 3300