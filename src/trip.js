const readlineSync = require("readline-sync");

const student = Number(readlineSync.question("\nStudents: "));
const teacher = Number(readlineSync.question("Teachers: "));
const busCapacity = Number(readlineSync.question("Bus capacity: "));

const people = student + teacher ;
let remainingPeople = people % busCapacity ;
let bus = (people - remainingPeople) / busCapacity + 1 ;
const buses = bus.toLocaleString("en");
const busNumber= Math.round(100 * buses)/100 ;

console.log("\n" + busNumber + " bus(es) is (are) needed, with " + remainingPeople + " passenger(s) on the last bus.");
