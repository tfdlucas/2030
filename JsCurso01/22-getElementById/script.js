let texto = document.getElementById('text');
let caixa = document.getElementById('box');
let nome = prompt('Digite seu nome: ');

texto.style.color = "#f00";
texto.style.fontSize = "50px";
texto.style.textAlign = "center";

caixa.innerHTML = nome;
caixa.style.fontStyle = "italic";
caixa.style.fontSize = "30px";