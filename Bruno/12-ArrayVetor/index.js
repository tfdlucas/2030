// É uma coleção de variaveis agrupados em uma unica variavel chamada array
// Vetor = são arrays controlados por apenas um indice, tambem chamado array unidimensional

// 2 modos de criar um array
//let cor = new Array();
let cor = [];

// Inserindo elemento
cor.push("Azul"); // Indice 0
cor.push("Vermelho"); // Indice 1
cor[2] = "Branco"; // Indice 2, modo mais antigo de inserir


console.log(cor);

let itens = ["Faca", "Lanterna", "Corda", "Chave"];
let mochila = itens;

console.log(mochila[0]);

console.log(itens[mochila[0]]); // O que tem na posicao 0 do vetor mochila