//scope-> scope is a visibility or accessibility of variables and functions in certain part of the code

//there are three type of scope

//1) globaal scope 
//2) functional scope
//3) block scope

const globalVar="I am a global variable";

function myFunction()
{
    const functionVar="I am a function variable";
    console.log(globalVar);
    console.log(functionVar);
}

myFunction();
console.log(globalVar);




//Lexical Scope Example

const name="global";

function outer()
{
    const name="outer";
    function inner()
    {
        const name="inner";
        console.log(name);
    }
    inner();
    console.log(name);  
}
outer();
console.log(name);  



function outerFunction()
{
    const msg="Hello from outer function";;

    function innerFunction()
    {
        console.log(msg);
    }
    return innerFunction;
}

const myInnerFunction=outerFunction();
myInnerFunction();


function createCounter()
{
    let count=0;

    function counts()
    {
        count++;
        console.log(count);
    }; 
     return counts;
}

const myCounter=createCounter();
console.log(myCounter());
console.log(myCounter());   
console.log(myCounter());

