// Não vai executar pois a condição é menor que num
let num = 15;
 while (num < 10) {
    console.log("Genie");
    num++;
 }
// O mesmo código será executado pelo menos uma vez aqui
 do {
    console.log(num);
 } while (num < 10);