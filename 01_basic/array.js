//slice and splice

const arr = [2,3,4,5,6,7];

console.log("A",arr); // A [2,3,4,5,6,7]

const num = arr.slice(1,4);
console.log(num);//[3,4,5]
console.log(arr);//[2,3,4,5,6,7]

//Real diffrence splice modifiy the original array but slice dont

const nums = arr.splice(1,4);
console.log(nums);//[3,4,5,6]
console.log(arr); //[2,7]



