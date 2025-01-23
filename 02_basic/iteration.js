const arr = [1,2,3,4,5];

/*
 * 
FOR IN AND OF LOOP IN ARRAY -> USING IN LOOP YOU CAN PRINT INDEX ONLY but using of loop you can print value of arr
 * 
 */

for (const key in arr) {
        console.log(key);
        
} // will give index

for (const element of arr) {
        console.log(element);
        
} // will give value

/*
 * HOW TO USE FORIN AND FOROF LOOP IN AN OBJECT->
 * USING FOR IN LOOP THERE IS A SYNTAX
 * FOR FOROF LOOP IT IS NOT ITERABLE
 * 
 */

const obj = {
      user: "Anjali sharma",
      email: "anjali@gmail.com"
}

for (const key in obj) {
        console.log(`${key} => ${obj[key]}`); // syntax
        
}

for (const [element,value] of obj) {
        console.log(element , "=>", value);
        
} // not iterable


/*
 * FORIN AND FOROF LOOP IN A MAP
 * YOU CAN USE FOROF LOOP BUT NOT FORIN LOOP
 * 
 */

const map = new Map();
map.set("IN", "India");
map.set("US", "united states");
map.set("UK", "united kingdom");

for (const [key,value] of map) {
        console.log(key , "=>", value);
        
}