let dt = new Date();
let tempo = new Date();

tempo.setDate(dt.getDate() + 2); // Serve para incremento e decremento

let dia = tempo.getDate();
let mes = tempo.getMonth();
let ano = tempo.getFullYear();
let diaSem = tempo.getDay();

let horas = dt.getHours();
let minutos = dt.getMinutes();
let segundos = dt.getSeconds();


let meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

let semana = new Array("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado");

console.log(semana[diaSem], ",", dia, " de ", meses[mes], " de ", ano, "\n");
console.log(`${horas}:${minutos}:${segundos}`);