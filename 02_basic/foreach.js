// A callback is a function passed as an argument to another function.

const arr = ["Anjali", "Pooja" , "Archana"];

arr.forEach((item) => {
     console.log(item);
     
})


/*
You can use forEach() in order to iterate over all the values nested in objects [in an array] using JavaScript.
const obj = {
        user : "Anjali",
        email: "abc@gmail.com"
}

obj.forEach((item) =>{
        console.log(item);
        
})

*/

const nums = [
      {
        user : "Anjali",
        email: "abc@gmail.com" 
      },
      {
        user : "riya",
        email: "abc@gmail.com" 
      },
      {
        user : "siya",
        email: "abc@gmail.com" 
      },
      {
        user : "meeta",
        email: "abc@gmail.com" 
      }
     
]

nums.forEach((item, index) =>{
        console.log(item.user, index);
        
})

