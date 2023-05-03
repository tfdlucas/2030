let tabela = document.querySelector("#tbnotas");
let somaNotas;

for (let i = 1; i < tabela.rows.length; i++) {
    somaNotas = Number(tabela.rows[i].cells[1].innerHTML)
        + Number(tabela.rows[i].cells[2].innerHTML);
    tabela.rows[i].cells[3].innerHTML = somaNotas;
}

let nota = [];
nota[0] = document.querySelector('#n1');
nota[1] = document.querySelector('#n2');
nota[2] = document.querySelector("#n3");
nota[3] = document.querySelector("#n4");

// Adicionando cores no valor final
for (let i = 0; i < 4; i++) {
    if (nota[i].innerHTML < 70) {
        nota[i].style.color = "#f00";
    } else {
        nota[i].style.color = "#00f";
    }
}