// singleton obj => when we use constructor to defone an object
const obj = new Object({
        email: "anjali@gmail.com"
});

// console.log(obj.email);

//Nonsingleton

// const Newobj = {
//         email : "Myemail@email.com"
// }

//objects in object

const Newobj = {
        email : "Myemail.com",
        Name: {
           UserName: {
                FirstName: "Anjali",
                LastName : "Sharma"
           }
        }
}

// console.log(Newobj.Name.UserName);

//Q. how to combine two or more objects;
// using object.assign method or ... (split) method
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const MyObj = Object.assign({}, obj1, obj2,obj4);
// console.log(MyObj);

//syntax 2

const myNewObj = {...obj1,...obj2,...obj4};
// console.log(myNewObj);


console.log(Object.values(MyObj));
