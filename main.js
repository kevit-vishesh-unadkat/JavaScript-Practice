//const keyword

if(true) {
    const name = "John";
    console.log(name); // Output: John
}

name = "Doe"; // This will throw an error because 'name' is a constant and cannot be reassigned

//reassignment of const variable is not allowed
// const a = 10;
// a=20; // This will throw an error because 'a' is a constant and cannot be reassigned


// console.log(a);
// const a=10;

//Hoisting concept is not pssible with const keyword

console.log(b);
var b=20;

//with var keyword hoisting is possible but with const keyword hoisting is not possible

// console.log(c); 
// let c=30; // This will throw an error because 'c' is not defined before this line due to hoisting rules with let and const


//Let keyword

//let keyword has blok scpe 
//and in let keyword we can reassign the value but we cannot redeclare the variable in the same scope

let x = 5;
x = 10; // This is allowed because we can reassign the value of a let variable
console.log(x); // Output: 10


//Loops in js

for (let i=0;i<=5;i++)
{
    console.log("number of repeatition is "+i);
}

//while loop
let j=0;
while(j<=5)
{
    console.log("number of repeatition is "+j);
    j++;
}

//for of loop
const arr = [1, 2, 3, 4, 5];
for(let num of arr)
{
    console.log(num);
}

//dowhile loop 

let k=0;
do{
    console.log("number of repeatition is "+k);
    k++;
}while(k>5);


const number=100;
const float=99.5;

console.log(typeof number);
console.log(typeof float);

console.log(0.1+0.2);
console.log(0.1+0.2==0.3); //false because of floating point precision issues


console.log(Math.max(10,3,5,67,78));
console.log(Math.min(10,3,5,67,78));
console.log(Math.random().toFixed(2)); // generates a random number between 0 and 1

console.log(Math.floor(Math.random()*100)); // generates a random number between 0 and 100
console.log(Math.ceil(Math.random()*10+1));