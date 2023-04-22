let ps = document.querySelectorAll("p");
let elementos = document.querySelectorAll(".titulo");
let box = document.querySelectorAll("div");

ps[0].style.color = "blue";
ps[1].innerHTML = "New Text";
box.style.color = "#0f0";

for (var i = 0; i < elementos.length; i++) {
    document.write(elementos[i].innerHTML = "<br>");
}
