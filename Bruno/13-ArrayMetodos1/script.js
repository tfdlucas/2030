// unshift = insere elementos no inicio
// pop = remove elementos do final
// shift = remove elemento do inicio
// splice = remove elemento que está no meio do array
let mochila = ["Caderno", "Lápis","Tesoura","Caneta"];

mochila.push("Borracha");
//mochila.unshift("Livro");
mochila.splice(2);
mochila.splice(2, 1); //  do incice 1, sera remoido 2
mochila.pop();
//mochila.shift();

console.log(mochila);