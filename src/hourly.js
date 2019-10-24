const readlineSync = require("readline-sync");

const hourlyWage = Number(readlineSync.question("\nHourly wage: "));
const monHour = Number(readlineSync.question("\nMonday: "));
const tueHour = Number(readlineSync.question("Tuesday: "));
const wedHour = Number(readlineSync.question("Wednesday: "));
const thuHour = Number(readlineSync.question("Thursday: "));
const friHour = Number(readlineSync.question("Friday: "));
const satHour = Number(readlineSync.question("Saturday: "));
const sunHour = Number(readlineSync.question("Sunday: "));

const wage = 12.5 ;
const earnings = (monHour * wage) + (tueHour * wage) + (wedHour * wage) + (thuHour * wage) + (friHour * wage) + (satHour * wage) + (sunHour * wage)
const earnf = earnings.toLocaleString("en", Math.round(100 * earnings)/100);

console.log("\nYou'll make $" + earnf + " this week.");
