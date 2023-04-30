const http = require('http');
const fs = require('fs');
const porta = process.env.PORT

// Será criado um arquivo teste dentro da pasta
const server = http.createServer((req, res) => {
    fs.appendFile('teste.txt', 'Curso de Node', (erro) => { // Anexar arquivo
        if (erro) throw erro
        console.log('Arquivo Criado')
        res.end() // Faz o servidor parar
    })
})

server.listen(porta || 3300, () => {
    console.log('Servidor rodando');
})