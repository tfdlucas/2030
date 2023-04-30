const http = require('http'); // Módulo http
const fs = require('fs'); // Módulo fs
const porta = process.env.PORT

const server = http.createServer((req, res) => {
    fs.readFile('site.html',(erro, arquivo)=>{ // Ler arquivo
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(arquivo)
        return res.end()
    }) 
})

server.listen(porta || 3300,()=>{
    console.log("Servidor rodando.");
})