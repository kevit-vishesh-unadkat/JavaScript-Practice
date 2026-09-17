console.log(a);
var a = 10;
var b =20;

console.log(a);
console.log(b);


var res=addNumber(3,19);
console.log(res);
function addNumber(num1,num2)
{
    var sum= num1+num2;
    return sum;
}


// const result= subNumber(10,5);
// console.log(result);
// const subNumber=function(num1,num2) {
//     const sub=num1-num2;
//     return sub;
// }


const user={
    name:"vishesh"
}

console.log(user.name);
user.name="yug";
console.log(user.name);

const arr=[1,2,3,4];
console.log(arr);
arr[2]=5;
console.log(arr);


function testVar()
{
    if(true){
        var x=10;
    }
    console.log(x);
}

testVar();

// function testLet()
// {
//     if(true)
//     {
//         let y=30;
//     }
//     console.log(y);
// }

// testLet();