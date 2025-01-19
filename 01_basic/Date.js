
let DateNow = new Date();
console.log(DateNow.toString()); 
console.log(DateNow.getDate());
console.log(DateNow.toDateString());
console.log(DateNow.toJSON());
console.log(typeof DateNow); // Object

// //How to convert the milisec to sec

console.log(Date.now()); // gives values in milisec

console.log(Date.now()/1000); // gives values in decimal so round of using Math.floor or Math.round
console.log(Math.round(Date.now()/1000));






