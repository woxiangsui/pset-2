const readlineSync = require("readline-sync");

const salary = readlineSync.question("\nAnnual salary: ");

const pretax = 0.07 ;
const federalIncome = 0.157 ;
const stateIncome = 0.0447 ;
const socialSecurity = 0.062 ;
const medicare = 0.0145 ;

const incomeTaxed = salary - (salary * pretax);
const stateTax = incomeTaxed * stateIncome ;
const federalTax = incomeTaxed * federalIncome ;
const fica = incomeTaxed * (socialSecurity + medicare) ;
const pay = (incomeTaxed - (stateTax + federalTax + fica))/24 ;
const payCheck = pay.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nYour take-home pay each check will be $" + payCheck + ".");
