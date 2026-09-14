// Execution Context 

// in Execution Context we have two phase 
//First step is memory Allocation phase 
//and Second Phase is execution step

//in first phase which memory allocation phase
// in this phase memory is allocate to to variable and function

//but all varibles are set to undifined 
// actual values are set in second phase 
//in execution phase


console.log(name);
var name="vishesh"; 

var name;

console.log(name);
name="vishesh";

console.log(age);
var age=21;

var age;
console.log(age);
age=21;

//function declarion hoisting

greet();
function greet()
{
    console.log("hello");
}


addNumber(10,20);
function addNumber(a,b)
{
    console.log(a+b);
}

// sayHello();

// const sayHello=function(){
//     console.log("Hello");
// }
