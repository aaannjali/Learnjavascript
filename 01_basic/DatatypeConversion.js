let marks = "80abcd";

console.log(marks);
console.log(typeof(marks));

let value = Number(marks);
console.log(typeof(value));
console.log(value);


/* 
so the output will be -> 
80abcd
string
number
NaN (not a number)

so we also have Number, String, Bool
*/


console.log("1" + 2); // -> 12 (first parameter is string so conversion will be in string)
console.log(2 + 2 + "1"); // => 41 (first parameter is in interger so conversion will be in integer)

console.log(+true); // output = 1

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* 
output will be =>
        1.false
        2.false
        3.true -> reason is that an equlity check == and comparisons > < >= <= work differently.
        comparisons convert null to a number, treating it as 0.
        that's why null >= 0 is true and null > 0 is false;        
*/

console.log("2"== 2);



 





