// indexOf = pesquisar se o elemento está dentro do array e retorna a posiçao do msm

let mochila = ["faca", "corda", "Chave", "Lanterna", "Pedra"];
let item = mochila.indexOf("Chave");

if (item > 0) {
    console.log(`O item está na mochila`);
} else {
    console.log(`O item não está na mochila.`);
}


// sorte = ordenar array
// reverse = vai inverter a ordem dos elementos no array

let num = [2, 4, 8, 7, 1, 3, 0, 5, 9, 6];

num.sort(); // Deixa os numeros em ordem
num.reverse(); // Inverte a ordem dos numeros

console.log(num);

// concat = junta dois arrays em um só

let mochila1 = ["seda", "quadro", "velas", "isqueiro"];
let mochila2 = ["meia", "corda", "arame", "agua"];
let mochilas = mochila1.concat(mochila2);

console.log(mochilas);

// join = junta todos os elementos de um array em uma variavel só em forma de string

let num2 = [2, 4, 8, 7, 1, 3, 0, 5, 9, 6];

let numeros = num2.join(); // Separado por virgulas

console.log(numeros);

// length = exime a quantidade de elementos em um array 

let numero = [2, 4, 8, 7, 1, 3, 6];

console.log(numero.length);