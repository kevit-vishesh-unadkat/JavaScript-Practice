// const user={
//     username:"vishesh",
//     loginCount:7,
//     signedIn:true,
//     getUserDetails:function()
//     {
//         console.log("Got user details from database");
//     }
// }

// console.log(user);
// console.log(user.username)
// console.log(user.getUserDetails());


// const arr=[10,20,30];

// const newArr=arr.map(num=>{
//     return num*2;
// });

// console.log(newArr);
// console.log(arr);


const obj={
    name:"vishesh",
    age:21,
    greet:function()
    {
        console.log("Hello ji!");
    }
}

console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.greet());
console.log(obj.city);

console.log(obj.hasOwnProperty("name"));

const obj2={
    account:30
}

obj2.__proto__=obj;
console.log(obj2.name);
console.log(obj.hasOwnProperty("name"));  //hasOwnProperty gote che "name" naam ni property jo exist karti hase to true return karse otherwise false return karse.
console.log(obj2.hasOwnProperty("name"));