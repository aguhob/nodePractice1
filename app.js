/* this node code, usually called "app.js" or "main code" or "main.js" runs js/scripts.js library code */

const myLibrary = require("./js/scripts.js");

let commandArgs = process.argv;
let otherArgs = [];

commandArgs.shift();
commandArgs.shift();
console.log(commandArgs);

for (var i = 0; i < commandArgs.length; i++) {
    otherArgs.push(parseInt(commandArgs[i]));
}

console.log(myLibrary.getMean(otherArgs));
    
console.log("The array of numbers is: " + commandArgs);

console.log("The mean of numbers is: " + getMean(commandArgs));
console.log("The median of numbers is: " + getMedian(commandArgs));


myLibrary.print(myLibrary.getSumProduct(10,20));

myLibrary.print("Today is ");
console.log(myLibrary.getDate());

let text = "hi"
myLibrary.print(text);

z = "Minda"
let zname = myLibrary.getNamer(z);
myLibrary.print(zname); 

myLibrary.print(Math.random());

let myArray = [1, 2, 1 ,2, 3, 3, 3, 4];
var actualMean = myLibrary.getMean(myArray);
myLibrary.print(actualMean)

var actualMedian = myLibrary.getMedian(myArray);
myLibrary.print(actualMedian)

let actualMode = myLibrary.getMode(myArray);
myLibrary.print(actualMode)

