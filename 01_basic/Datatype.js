
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // output will be false because two both symbol treated diffrently

let arr = ["Anjali", "Pooja", "Archana"];
console.log(arr[0]);
 
arr[0] = "sourav";
console.log(arr);

let obj = {
     name: "Anjali",
     age: 18
}

const myFunction = function(){
        console.log("Hello world");
    }

/*
 To store the data in memory and access we have two data types => primitive and non primitive
 Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
 

JavaScript is a dynamically typed language. 
This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it.
You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.      

 */ 

//datatypes are based on memory allocation
//Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

//Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory    