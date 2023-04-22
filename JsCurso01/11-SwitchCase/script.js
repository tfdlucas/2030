let pos, msg, msgB;
let pontos = 500;

if (pontos >= 1000) {
    pos = 1;
}
else if (pontos >= 800) {
    pos = 2;
}
else if (pontos >= 600) {
    pos = 3;
}
else { pos = 4; }

switch (pos) {
    case 1:
        msg = "Primeiro lugar";
        break;
    case 2:
        msg = "Segundo lugar";
        break;
    case 3:
        msg = "Terceiro lugar";
        break;
    default:
        msg = "Não foi ao pódio";
}

switch (pos) {
    case 1:
    case 2:
    case 3:
        msgB = "Subiu ao pódio";
        break;
    default:
        msgB = "Não subiu ao pódio";
}

console.log(msg,"\n", msgB);