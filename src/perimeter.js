const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

const cm = 2.54 ;
let perimeter = (2 * width + length * 2) * cm ;
const perimeteri = Math.round(100 * perimeter)/100 ;
const perimeterf = perimeteri.toLocaleString("en");

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has a perimeter of " + perimeterf + " centimeter(s).");
