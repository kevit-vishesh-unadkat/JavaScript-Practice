// console.log("Hello World!");

// const arr= [10,20,"hello",true];

// console.log(arr)

// arr.push(50);
// console.log(arr)

// arr.pop()
// console.log(arr);

// // arr.unshift(70,80);
// // console.log(arr);

// // arr.shift();
// // console.log(arr);

// arr.slice(1,4);
// console.log(arr);


// let marks=100;
// let marks2=30;
// let marks4=50;
// let marks5= 60;

// let marks=[100, 60 , 70 , 50];

// console.log(marks);

// console.log(marks.length);

// console.log(marks[2]);

// marks[1]=80;

// console.log(marks);

// push operation : push oparation is use to insert a data element at the last.

// marks.push(30);
// console.log(marks);

//pop operation : pop operation is use to delete a element at the last.

// marks.pop();
// console.log(marks);

//unshift operation : unshift operation is use to insert a data element into start.
// marks.unshift(20,25);
// console.log(marks);

//shift operation : shift opearation is use to delete a data element from start.
// marks.shift()
// console.log(marks);

//how to iterate over the array 
// there is looping method to itterate over the array

//for loop
//for loop is used where we need to index . 

// for(let i=0;i<marks.length;i++)
// {
//     console.log(marks[i]+" "+i);
// }

// for of loop 
//for of loop is used where we don't need to index 
// we only deal with value.

// for(let n of marks)
// {
//     console.log(n);
// }

//this is the biggest difference between for loop and for of loop 
//for loop is used where we need both value and value's index 
// but for of loop is used where we only deal with array's value


//over javascript array is no more array in javascript
//javascript array is internally is object type

// so in javascript :
//oject , array -> are non-primitive (so it's copy by refernce hota hai .)

// and over primitive datatype ->like string , Number etc .. 
//wo sab copy by value hote hai.

// arr=marks
// arr.push(75);

// console.log(marks);
// console.log(arr);

// let a=10;
// a=20;

// console.log(a);


//slice Operation in Javascript:
//in js slice operation is use to extracrt some portion of an array.
//and slice operation reture a new array .

// const arr= [10, 30 ,50 ,40 , 100 ,60];

// const arr1=arr.slice(1,4);
// console.log(arr);
// console.log(arr1);


//splice Opearation in Javascript:
//in js splice operation is to remove some specific portion of an array.
//and splice operation is no create a new array.

// const arr2=[10,50,60,75,43,58];

// arr2.splice(1,4);
// console.log(arr2);


//main difference betwwen slice and splice is 
// slice return aq new array 
//and splice do operation inplace.


// const arr1=[10 ,6 ,73, 67, 2, 87,91];
// const arr2=[24,34,65,32,67,87];
// const arr4=['hello','vishesh','unadkat'];
// arr1.push(arr2);
// console.log(arr1);

// const arr3=arr1.concat(arr2,arr4);
// console.log(arr3);

//concat oprstion is create a new array 
//and push operation only push the another array into it self.


//spread operation :
//spread operation in js is used cocate each array element
// badha ne kholi ne rakhi dese.
//it returns a new array.

// const arr3=[...arr1,...arr2,...arr4];
// console.log(arr3);

const names = ["Alice", "Rohit","Bob","Mohit", "Charlie","Bob",'alice'];

console.log(typeof names.toString());
console.log(names.toString());

console.log(names.join("--"));
console.log(typeof names.join("--"));


//both toString and join method is to convert array to string 
//but the differencce b/w them is to 
// with tthe use of join method we can join the string using diffent different way 
//witch is not possible in toString method.

console.log(names.indexOf('Bob'));
console.log(names.lastIndexOf('Bob'));
console.log(names.includes("Alice"));

// indexOf-> method find the element and return first occurence index.
//lastindexOf-> method find the element and return last occurence index.
//includes-> method find the element and basis of element present or not it 
// will return the boolean value.

console.log(names.sort());
//sort ->method sort the element with the uas of assci values.

console.log(names.reverse());
//reverse->method is bassically reverse the array data element.

const a=[10,40,31,71,5,11];
console.log(a.sort());   // output : [ 10, 11, 31, 40, 5, 71 ]

//so in javascript sorting bases of string assci values. 
//so js treated number as "10", "40" like that .

//so why javascript follow this 
//because in js array can store any kind of datatype element
//it can be number , string , boolean etc..

a.sort((a,b)=>a-b);
console.log(a);
//this is callback function 
//this will sort the number in accending order.

a.sort((a,b)=>b-a);
console.log(a);
//this will sort the array in decending array.

const b = [10,30,50,[40,90,[60,19,99],11], 80];
const c=b.flat(Infinity);
console.log(c);

//so bassically flat method is return a new array. 
// we have to define how much layer we want to flat the array .


console.log(Array.isArray([1,2,3]));
console.log(Array.isArray("Hello"));

//Array.isArray ->checks whether a vlaues is an array.

const fruits=['apple','banana','orange'];

for (let keys of fruits.keys())
{
    console.log(keys);
}

for(let values of fruits.values())
{
    console.log(values);
}

const numbers=[10,20,30];
for(let num of numbers)
{
    console.log(num);
}

console.log(numbers.at(2));  // it will return at particular index element.

// negative index is also possible in js

console.log(numbers.at(-2));
console.log(numbers.at(-1));

//spread operation 

const frontend=['HTML','CSS'];
const backend=['Node','express'];

const skills=[...frontend,...backend];
console.log(skills);

