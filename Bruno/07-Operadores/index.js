// Usar quando tiver multiplos testes que irao envolver um retorno para uma condicao

// > || = 20 && <= 30
// >= 50 && <= 60

let pontos = 32;

if (pontos >= 20 && pontos <= 30 || pontos >= 40 && pontos <= 50) {
    console.log('Você foi muito bem fez ', pontos, ' pontos.');
} else {
    console.log('Você foi muito mal fez ', pontos, ' pontos.');
}