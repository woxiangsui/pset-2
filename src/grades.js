const readlineSync = require("readline-sync");

const homeworkGrades1 = Number(readlineSync.question("\nEnter three homework grades.\n"));
const homeworkGrades2 = Number(readlineSync.question(""));
const homeworkGrades3 = Number(readlineSync.question(""));

const quizGrades1 = Number(readlineSync.question("\nEnter three quiz grades.\n"));
const quizGrades2 = Number(readlineSync.question(""));
const quizGrades3 = Number(readlineSync.question(""));

const testGrades1 = Number(readlineSync.question("\nEnter three test grades.\n"));
const testGrades2 = Number(readlineSync.question(""));
const testGrades3 = Number(readlineSync.question(""));

const homework = 0.15 ;
const quiz = 0.35 ;
const test = 0.5;

let homeworkGrade = ((homeworkGrades1 + homeworkGrades2 + homeworkGrades3)/3) * 0.15 ;
let quizGrade = ((quizGrades1 + quizGrades2 + quizGrades3)/3) * 0.35 ;
let testGrade = ((testGrades1 + testGrades2 + testGrades3)/3) * 0.5 ;
const grade = homeworkGrade + quizGrade + testGrade ;
const gradef = Math.round(100 * grade)/100 ;

console.log("\nYour marking period grade is " + gradef + "%.");
