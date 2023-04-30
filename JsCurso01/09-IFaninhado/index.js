let num = 79;

function incremento() {
    if (num > 10) {
        console.log("O numero que voce adicionou é maior que 10.");
    } else if (num < 10) {    
        for(let i = 0; i < 10; i++) {
            console.log(i);
        }
    }
}

incremento();