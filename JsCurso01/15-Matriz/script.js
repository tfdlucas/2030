// São arrays multidimensionais, que são os arrays que serão controlados por 2 indices
// Ainda é possivel adicionar um terceiro item

let mochila = new Array();

let item1 = ["Corda", 2],
    item2 = ["Faca", 1];
    item3 = ["Pincel", 5],
    item4 = ["Prego", 45];

mochila.push(item1);
mochila.push(item2);
mochila.push(item3);
mochila.push(item4);

console.log(`${mochila[0][0]} - ${mochila[0][1]}.`);
console.log(`${mochila[1][0]} - ${mochila[1][1]}.`);
console.log(`${mochila[2][0]} - ${mochila[2][1]}.`);
console.log(`${mochila[3][0]} - ${mochila[3][1]}.`);