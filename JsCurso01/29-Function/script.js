let numeros = new Array(10, 2, 5, 30, 25, 19, 20, 50, 40, 150);

function media(numeros) {
    let tam = numeros.length;
    let soma = 0;
    for (let i = 0; i < tam; i++) {
        soma += numeros[i];
    }
    return Math.round(soma/tam);
}

function som(x, y) {
    return console.log(x + y);
}

som(1, 2);
console.log(media(numeros));