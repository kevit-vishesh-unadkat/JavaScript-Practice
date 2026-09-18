//Object

const student  ={
    name:"vishesh",
    age:21,
    branch : "computer engineering"
}

console.log(student)

console.log(student.name);

//A property can also contain a functions

const user={
    name:"vishesh",
    greet(){
        console.log("Hello!");
    }
};

console.log(user);
user.greet();

//dot notation 
console.log(student.branch);
console.log(student.name);

//bracket notation

console.log(student["age"]);
console.log(student["branch"]);

//Adding Properties
const user1={
    name:"vishesh"
};

console.log(user1.name);
user1.age=21;
user1.city="Rajkot";
console.log(user1);


//Updating Properties

user1.age=23;
console.log(user1);

//Deleting Properties

delete user1.age;
console.log(user1);


//Object Equality 

const a={
    name:"vishesh"
}

const b ={
    name:"yug"
}

console.log(a===b);

//object is non primitive datatype 
//so object share a refrence not a actual value

const c=a;

console.log(a===c);

//it will given true because both a and c refer to same memory location.
//and b an a both efer to differet memory location.

c.name="nirmit";

console.log(a.name);
console.log(c.name);

//it will reflect on a although we change in c 
//but both refer to same memory location 
//so changes happen in c or a it will reflect to onther.


//object destructuring

const user2={
    name:"vishesh",
    age:21,
    city:"rajkot"
};

const {name,city} =user2;

console.log(user2.name);
console.log(user2.city);

const user3={
    name1:"nirmit",
    age:17,
    city:"Rajkot"
};

const {name1 , ...otherData}=user3;
console.log(name1);
console.log(otherData);
console.log(Object.keys(user3));
console.log(Object.values(user3));

console.log("name1" in user3);


//for.. in 

const stu={
    name:"vishesh",
    age:21
}

for (const key in stu)
{
    console.log(key,stu[key]);
}


//prototype

// const d={
//     name:"vishesh",
//     age:23,
//     greet:function()
//     {
//         console.log("Hello Ji!");
//     }
// }

// const e={
//     name:"yug",
// }

// d.__proto__(e);

// console.log(e);

const car={
    name2:"Honada",
    model:"civic",
    yer:2021
}

console.log(Object.keys(car));
console.log(Object.values(car));

for (const [key,value] of Object.entries(car))
{
    console.log(`${key}:${value}`)
}