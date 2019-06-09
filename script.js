let num = 100;

switch (num) {
    case num > 40:
        console.log("Много!");
        break;
    case num < 40:
        console.log("Мало");
        break;
    case 100:
        console.log("Верно!");
        break;
    default:
        console.log("что-то пошло не так")
        break;

}

let num = 50
/*while (num < 55) {
    console.log(num);
    num++;
}*/

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i);
}