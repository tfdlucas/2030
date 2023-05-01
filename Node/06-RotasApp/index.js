// Arquivo principal

const express = require('express')
const rotas = require('./rotas/rotas')
const porta = process.env.PORT || 3000

const app = express()

app.use('/', rotas)

// Rota genérica, usada no caso de as rotas definidas nao forem encontradas
app.get('*', (req, res) => {
    res.send('Curso de Node')
})

app.listen(porta, () => {
    console.log('Rodando servidor')
})