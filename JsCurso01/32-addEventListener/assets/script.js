function msg() {
    alert('Olá mundo!');
}

function cor(obj, cor) {
    obj.style.backgroundColor = cor;
}

// Inicialização de eventos
function addEventos() {
    let obj = document.getElementById("dv1");
    obj.addEventListener("click", msg);
    obj.addEventListener("mouseover", function (event) {
        cor(obj, "#fff");
    });
    obj.addEventListener("mouseout", function (event) {
        cor(obj, "#f00");
    });
}

window.addEventListener("load", addEventos);