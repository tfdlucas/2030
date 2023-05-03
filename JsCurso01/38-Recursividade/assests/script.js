// É uma função que chama a si mesma, pode ser usada para substituir rotinas de loop.

// CONTADOR

function contador(min, max) {
    console.log(min);
    if (min < max) {
        contador(++min, max);
    }
}

// FATORIAL

function fatorial(n) {
    if (n == 1) { // Condição de parada
        return 1;
    }
    return n * fatorial(n - 1);
}
// !5 = 5*4*3*2*1 = 120 
console.log(fatorial(5));

//contador(0, 10);

// USANDO REQUEST ANIMATION

let obj = document.querySelector("#quad");
let ang = 0;
let anima;

function gira() {
    obj.style.transform = `rotate(${ang}deg)`;
    ang++;
    if (ang > 360) {
        ang = 0;
    }
    anima = requestAnimationFrame(gira);
}

gira();