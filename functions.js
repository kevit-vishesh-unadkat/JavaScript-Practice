//functions Practice

//this is the very basic way to create or declare a function.
function greeting()
{
    console.log("Hello From Vishesh Side")
}

greeting();

// function addNumber(num1,num2)
// {
//     console.log(num1+num2);
// }

// addNumber(10,20);

function addNumber(num1,num2)
{
    return num1+num2;
}

console.log(addNumber(10,45));


//this is second way to create a function 
//in Javascript we can store a function in variable.
const subNumber=function(num1,num2)
{
    if(num1>=num2)
    {
         return num1-num2;
    }
    else{
        return `${num1} is less than ${num2}`;
    }
   
}

console.log(subNumber(20,30));


// function with parameter.
function addNumber1(num1,num2,num3=0,num4=0){
    return num1+num2+num3;
}

console.log(addNumber1(10,40));

//this is the not good way to declare
//instead of this we use rest operator. 

//rest operator 
function mulNumber(...num)
{
    let prod=1;

    for(let n of num)
    {
        prod*=n;
    }
    return prod;
}

console.log(mulNumber(6,7));
console.log(mulNumber(3,7,9));

const arr=[10,20,30,40,50];

// const [first,second]=arr;
// console.log(first,second);

const [first,second,...num]=arr;
console.log(first,second,num);



//function : expression

console.log(hello());
function hello()
{
    // console.log("Hello!");
    return "Hello!";
}

//but this type of we can 
//do function : expression is possible.



// console.log(playing());
// const playing=function()
// {
//     return "In playing function"
// }
//in this type of function declaration 
//function : expression is not possible.


//Arroew function

// ()=>{

// }

const swimming=()=>{
    console.log("swimming");
}

swimming();

const divNumber=(num1,num2)=>{
    return num1/num2;
}

console.log(divNumber(10,5));


//very consise way to write a arrow functions.
const addNumber2=(num1,num2)=> num1+num2;

console.log(addNumber2(40,80));


//example 2

const squareNumber=(num)=>num*num;
console.log(squareNumber(6));


//object
// const greeting=()=>{
//     return {
//         name:"vishesh",
//         age:21
//     }
// }

//for object shorthand declaration
const greeting1 =()=>({name:"vishesh",age:21});

console.log(greeting1());



//callback - > in this concept onether function is pass as an argument to the function.

function greet()
{
    console.log("Hello Ji Kaise Ho!");
}

function dance()
{
    console.log("I am dancing");
}

function meet(Callback)
{
    console.log("I am going to meet someone");

    Callback();  //you hardcode the value 
    //don't do that instead of using callback 

    console.log("Meeting Is over");
}

meet(greet);
meet(dance);


