const length = 48 ;
const width = 24 ;
const holeDiameter = 6 ;

const area = length * width ;
const radius = holeDiameter / 2 ;
const circleArea = Math.PI * (radius ** 2) ;
const surfaceArea = area - circleArea ;
const surfaceAreaf = surfaceArea.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2});

console.log("\nThe surface area of a standard Cornhole board is " + surfaceAreaf + " square inch(es).")
