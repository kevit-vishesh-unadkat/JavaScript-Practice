//string

let str1="vishesh";
console.log(str1);

console.log(str1.length);

str1='vishesh unadkat';
console.log(str1);

console.log(str1.length);

console.log(str1[0]);

// str1[2]=r;
// console.log(str1);

//convert String into uppercase

console.log(str1.toUpperCase());
console.log(str1);

//convert String into lowercase

console.log(str1.toLowerCase());
console.log(str1);

const str=`Hello Coder Army Coder`;

console.log(str.indexOf('Cod'));
console.log(str.lastIndexOf('Cod'));
console.log(str.includes('cod'));


//indexOf -> returns the first time occurence .
//lastindexOf -> return the last time occure.
//includes ->it will returns the boolean values 
//if word is present in the sentence or word 
//the it return true
//otherwise it will return false.

//Slice operation in string

console.log(str.slice(2,7));
console.log(str.slice(3));
console.log(str.slice(-5,-2));

//slice operation in js is 
//bassicaally extract the some portion of string 
//and it will also support negative indexing

//splice operation in js

//differnce b/w slice and substr
//slice is allowed negative indexing but substring is not allowed negative indexing


//string iteration

const text="Hello";

for (let n of text){
    console.log(n);
}

//second method

for(let i=0;i<text.length;i++){
    console.log(text[i]);
}
