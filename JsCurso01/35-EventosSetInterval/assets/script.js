let dx, dy, px, py, vel, obj, tmp;

// Essa função ai iniciar as variaveis globais
function inicia() {
    dx = 0;
    dy = 0;
    px = 0;
    py = 0;
    vel = 1;
    obj = document.getElementById("dv1");
    document.addEventListener("keydown", teclaDw); // Quando a tecla é disparada
    document.addEventListener("keyup", teclaUp); // Quando a tecla é liberada
    tmp = setInterval(enterFrame, 1);
}

// Essa função faz com que o objeto se movimente
function teclaDw() {
    let tecla = event.keyCode;
    if (tecla == 37) {
        dx = -1;
    } else if (tecla == 38) {
        dy = -1;
    } else if (tecla == 39) {
        dx = 1;
    } else if (tecla == 40) {
        dy = 1;
    };
}

function teclaUp() {
    let tecla = event.keyCode;
    if (tecla == 37) {
        dx = 0;
    } else if (tecla == 38) {
        dy = 0;
    } else if (tecla == 39) {
        dx = 0;
    } else if (tecla == 40) {
        dy = 0;
    };
}

// Função coração do movimento e irá atualizar a movimentação
function enterFrame() {
    px += dx * vel;
    py += dy * vel;
    obj.style.left = px + "px";
    obj.style.top = py + "px";
}

window.addEventListener("load", inicia);