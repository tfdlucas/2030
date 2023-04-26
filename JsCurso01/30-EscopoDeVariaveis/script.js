var nomeCor = 'Vermelho'; // this no console vai fazer ser impresso esta variavel
                         // pois o this vai fazer referencia a variavel raiz
function cor() {
    nomeCor = 'Azul';
    console.log(this.nomeCor, '\n', nomeCor);
}

cor();