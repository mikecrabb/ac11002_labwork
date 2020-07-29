var x = 5;
var y = 6;

var cars = ["Audi", "Porche", "Toyota"];

function multiply(a,b){
    return (a*b);
}

console.log("Hello!!!");
console.log(x*x);
console.log("Function Test: " + multiply(x,y));
console.log(cars[0]);

for (var i of cars){
    console.log("The car is a " + i);
}

document.write("<p>Hello <strong>2</strong>!</p>");
document.write(Math.PI);