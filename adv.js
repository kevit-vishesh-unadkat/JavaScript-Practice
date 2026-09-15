async function myFunction(){
    return "Hello";
}

console.log(myFunction());

//Equivalent to :
function myFunction()
{
    return Promise.resolve("Hello!");
}

console.log(myFunction());


const fetch = require('node-fetch');

console.log("Hi I am vishesh And below is my github account.")
async function fetchData()
{
    console.log("Fetch the data from the api");
    const response=await fetch('http://codecademy.com');
    const data=await response.json();
    return data;
}

console.log(fetchData());

console.log("End")


console.log("Fetch User data From api");
async function getUser(){
    try{
        const response=await fetch('/api/user');
        const user=await response.json();
        return user;
    }
    catch(error)
    {
        console.log(error);
    }
}

console.log("Fetch user data successfully");
console.log(getUser());