 const user = {
        usename: "Anjali Sharma",
        email: "anjali@gmail.com",

        greetings: function() {
                console.log(`Hello ${this.usename} Welcome Back!`);
                
        }
 }

 user.greetings();
 console.log(this); // {} because of node env, in browzer it will be window object
 console.log(user);
 

 function fun(){
        let user = "anjali"
        console.log(this.user); // undefined
        console.log(this); // global
          
 }

 fun();

 const one = (num1, num2) => {
        return num1 + num2;
 }

const two = (num1, num2) => (num1 + num2);



 console.log(one(5,5));

 (function myfun(){
        console.log("fundaY");
        
 })(); // immediately invoked function expression
 
 