const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success)
        {
            console.log("Hello I am vishesh")
            resolve("Success!");
        }
        else{
            reject("Failed!");
        }
    },2000);
});


//simple Promise
const simplePromise=new Promise((resolve,reject)=>{
    console.log("Simple Promise");
    resolve("Hello!");
})

//promise with timeout

const timeOutPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("setTimeout promise");
    },3000);
});


//promise with conditional logic

function checkAge(age)
{
    return  new Promise((resolve,reject)=>{
        if(age>=18){
            console.log("Access Granted");
            resolve("Access Granted")
        }
        else{
            console.log("Access Denied");
            reject("Access Denied");
        }
    });
}

const ageCheck=checkAge(21);


async function myFunction(){
    return "Hello1";
}

myFunction();


async function fetchData()
{
    const response=await fetch('https://api.example.com/data');
    const data=await response.json();
    return data;
}


async function getUser(){
    try{
        const response = await fetch("api/user");
        const data=await response.json();
        return data;
    }
    catch(error){
        console.error(error);
    }
    
}
