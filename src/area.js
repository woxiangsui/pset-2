const readlineSync = require("readline-sync");

const width = readlineSync.question("\nWidth: ");
const length = readlineSync.question("Length: ");

let nm = 25.4 ;

const widthNM = width * nm ;
const lengthNM = length * nm ;
let area = widthNM * lengthNM ;
const area = Math.round(100 * area);
const area = area.toLocalString("en");
console.log("\nA(n) " + width + "-by-" +length + "-inch sheet of paper has an area of " + area + " square millimeter(s).");
