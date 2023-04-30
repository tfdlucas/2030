// 37 - Esquerda 38 - Cima 39 - Direita 40 - Baixo
let x = 0;
let y = 0;

function move() {
    let obj = document.getElementById("dv1");
    let tecla = event.keyCode;

    if (tecla == 37) {
        x -= 10; // Vai dar um salto de 10 pixels
        obj.style.left = x + "px";
    } else if (tecla == 38) {
        y -= 10;
        obj.style.top = y + "px";
    } else if (tecla == 39) {
        x += 10;
        obj.style.left = x + "px";
    } else if (tecla == 40) {
        y += 10;
        obj.style.top = y + "px";
    } else if (tecla == 13) { // 13 = Tecla Enter
        alert("Evento keydown Removido");
        document.removeEventListener("keydown", move);
    }
}

document.addEventListener("keydown", move);