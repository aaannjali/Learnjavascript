function add(num1, num2) {
  console.log(num1 + num2); // will just print
}

const result = add(2,3);
console.log(result); // it will give undefined because we are just printing the value not rerurning anything


function addNew(num1, num2){
   return num1 + num2; // will return some function
}

const ans = addNew(3,6)
console.log(ans); // print ans


// //Q. suppose you have to return multiple values
function calculatePrize(val1, val2,...nums){
     return nums;
}

console.log(calculatePrize(100,200,300,400)); // concat the values into array

//Q. how to pass object in a function

const obj = {
     user : "Admin",
     age: 20,
     place: "Kolkata"
}

function myFun(anyobj) {
        console.log(`My name is ${anyobj.user}`); 
        
}

myFun(obj);

//Q. how will you pass the array in a function

const arr = [1,2,3,4,5];

function myfun(myarr){
        return myarr[2];
}

console.log(myfun(arr));





