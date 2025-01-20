//object literals

//Q. suppose you have defined a symbole with a key value how you will use that?
const mysymbol = Symbol("key1")

// Q. how will you use that key in your object
// A. []

const obj = {
        name : " Anjali sharma",
        [mysymbol]: "Hello symbol here!", //  keep in mind to use [] when you use symbol key.
        email: "Anjali@gmail.com",
        city : "Kolkata",
        place: "Liluah",
        age: 18,
        islogeding : true,
        arr: [1,2,3,4,5]

}

console.log(obj.name); // syntax 1
console.log(obj["email"]); // syntax 2
console.log(obj.age);
console.log(obj.arr);


// Q. now suppose i have to change the value of a key how will you do that?

obj.email = "anjali@chatgpt.com";
console.log(obj);

//Q suppose i dont want any futher changes in my email how will you do that?

Object.freeze(obj); // using freeze we can not modify our object anymore
obj.name = "Sharma anjali";
console.log(obj);





