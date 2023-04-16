let num;

num = 0;
while (num < 10) {
    console.log(num);
    num++; // Se isso nao for colocado ele entra em um loop infinito
}

console.log("///////////////////////");

for (num = 0; num < 10; num++) {
    console.log(num);
}

console.log("///////////////////////");

let num2;

num2 = 10;
while (num--) { // Vai diminuir
    console.log(num);
}

console.log("///////////////////////");

num = true;
cont = 0;
while (num) {
    console.log("Papaleo");
    cont++;
    if (cont > 9) {
        num = false;
    }
}