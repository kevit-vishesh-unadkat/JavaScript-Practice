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


//hoisting and redclaration

var x= 10;
var x=20;

console.log(x);

//let and const are not hoisted 
//and they are not redclared

// let y=10;
// let y=20;



//var is a function scope

function test()
{
    if(true)
    {
        var msg="Hello";
    }
    console.log(msg);
}

test(); 


//but let is block scope

function test1(){
    if(true)
    {
        let msg="Hello";
        console.log(msg);
    }
    console.log(msg); // it will give error because msg is not defined in this scope (refrence error.)
}
test1();    
