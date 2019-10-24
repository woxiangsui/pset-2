const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

const mm = 25.4 ;
let area = width * length * mm * mm ;
const areaI = Math.round(100 * area)/100 ;
const areaF = areaI.toLocaleString("en");

<<<<<<< HEAD
const widthNM = width * nm ;
const lengthNM = length * nm ;
let area = widthNM * lengthNM ;
area = Math.
console.log("\nA(n) " + width + "-by-" +length + "-inch sheet of paper has an area of " + area + " square millimeter(s).");
=======
console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaF + " square millimeter(s).");
>>>>>>> 97a4db5d8baaead5852c849e4944716c03504a51
