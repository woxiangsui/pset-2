const readlineSync = require("readline-sync");

const hourlyWage = Number(readlineSync.question("\nHourly wage: "));
const monHour = Number(readlineSync.question("\nMonday: "));
const tueHour = Number(readlineSync.question("Tuesday: "));
const wedHour = Number(readlineSync.question("Wednesday: "));
const thuHour = Number(readlineSync.question("Thursday: "));
const friHour = Number(readlineSync.question("Friday: "));
const satHour = Number(readlineSync.question("Saturday: "));
const sunHour = Number(readlineSync.question("Sunday: "));

console.log("\nYou'll make $" + "this week.");
