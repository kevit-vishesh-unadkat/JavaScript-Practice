class Animal{
    constructor(name){
        this.name=name;
    }
    getName()
    {
        console.log(`the name of animal is ${this.name}`);
    }
}

const animal=new Animal("lion");


// const user={
//     name:"vishesh",
//     email:"unadkatvishesh@gmail.com",
//     login(){
//         console.log("Login")
//     },
//     logout(){
//         console.log("Logout");
//     }
// }

class User{
    constructor(name){
        this.name=name;
    }
    sayHello()
    {
        console.log(`Hello ${this.name}`);
    }
}

const user=new User("vishesh");
user.sayHello();