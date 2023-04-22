var num = 10; // tera relevancia global

console.log(num);

if (num == 10) {
    let num = 5; // tera relevancia dentro deste escopo
    console.log(num);
}

console.log(num);