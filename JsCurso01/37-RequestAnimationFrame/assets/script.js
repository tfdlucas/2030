let jog, vel, dx, dy, px, py, anima;

function inicia() {
    vel = 5;
    dx = 1;
    dy = 0;
    px = 0;
    py = 0;
    jog = document.querySelector('#jogador');
    jog.addEventListener("click", () => {
        cancelAnimationFrame(anima);
    });
    game();
    play();
    stop();
}

function game() {
    px += dx * vel;
    // py += dy * vel;
    jog.style.left = px + "px";
    //   jog.style.top = px + "px";
    if (px > 800) {
        dx = -1;
    } else if (px < 0) {
        dx = 1;
    }
    anima = requestAnimationFrame(game);
}

function play() {
    let btnPLay = document.querySelector("#play");
    let jog = document.querySelector("#jogador");

    btnPLay.addEventListener("click", game);
    jog.addEventListener("click", game);
}

function stop() {
    let btnStop = document.querySelector("#stop");
    btnStop.addEventListener("click", () => {
        cancelAnimationFrame(anima);
    });
}

window.addEventListener("load", inicia);