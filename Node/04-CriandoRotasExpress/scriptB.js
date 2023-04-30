// Usando Express

const express = require('express')
const app = express()
const porta = process.env.PORT 

// Definir as rotas
app.get('/', (req, res) => { //  Rota raiz
    res.send('Seja bem vindo') // Enviar
}) 

app.get('/canal', (req, res) => {
    res.json({canal:'Cursinho de Node Js'})
})

app.listen(porta || 3500, () => {
    console.log('Servidor rodando')
})