const score = 100;
console.log(score); // 100


const marks = new Number(score); // [Number : 100]
console.log(typeof(marks)); // object

console.log(Math); // object
console.log(Math.random()); // gives values between 0-1
console.log(Math.floor(Math.random()*10) + 10); // round up the values

const min = 5;
const max = 10;

console.log(Math.floor(Math.random() * (max- min + 1)) + min);
// will give values between min and max

