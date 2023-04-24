// As 4 maneiras fazem a mesma coisa, apontam o id do formulario
var fm = document.forms[1].id;
var fm1 = document.forms.item(0).id;
var fm2 = document.forms.namedItem("curso1").id;
alert(document.getElementById("curso1").elements[0].value);

// Retorna todo o conteudo do formulario "curso1"
var fm4 = document.forms.namedItem("curso1").innerHTML;

// Apontar elementos
var fm3 = document.forms.namedItem("curso1").elements[1].value;

var f1 = document.forms[1];
var el = f1.elements;

for (var i = 0; i < el.length - 1; i++) {
    el[i].style.backgroundColor = "#ddd";
    el[i].value = "Class Js";
}