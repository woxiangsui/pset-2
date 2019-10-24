const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

const mm = 25.4 ;
let area = width * length * mm * mm ;
const areaI = Math.round(100 * area)/100 ;
const areaF = areaI.toLocaleString("en");

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaF + " square millimeter(s).");
