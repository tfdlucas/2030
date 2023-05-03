let imgs = [];
let slider;
let imgAtual;
let maxImg;
let tmp;

function preCarregamento() {
    let s = 1;
    for (let i = 0; i < 5; i++) {
        imgs[i] = new Image();
        imgs[i].src = "img/s" + s + ".jpg";
        s++;
    }
}

// Carregar imagem no background da div

function carregarImg(img) {
    slider.style.backgroundImage = "url('" + imgs[img].src + "')";
}

function inicia() {
    preCarregamento();
    imgAtual = 0;
    maxImg = imgs.length - 1; // Como array inicia do zeero, subtrai um
    slider = document.querySelector("#dvSlider");
    carregarImg(imgAtual);
    tempoTroca = 3000;
    tmp = setInterval(troca, tempoTroca);
}

function troca() {
    imgAtual++;
    if (imgAtual > maxImg) {
        imgAtual = 0;
    }
    carregarImg(imgAtual);
}

window.addEventListener("load", inicia);