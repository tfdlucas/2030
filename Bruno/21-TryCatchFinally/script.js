// Tratamento de erros

var num;

try {
    num = 1;
    if (num > 10) {
        throw new Error("Valor inválido."); // Excessao
    }
    console.log("Valor: ", num);
} catch (e) {
    console.log("ERRO: ", e.message);
} finally {
    console.log("Fim do tratamento.");
}