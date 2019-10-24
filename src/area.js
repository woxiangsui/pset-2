const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

const nm = 25.4 ;
let area = width * length * nm * nm ;
const areaI = Math.round(100 * area)/100 ;
const areaF = area.toLocaleString("en");

console.log("\nA(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaF + " square millimeter(s).");
