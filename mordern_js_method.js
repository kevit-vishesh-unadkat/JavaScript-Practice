const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Book", category: "Books", price: 30, inStock: true },
  { id: 3, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 4, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 5, name: "Coffee Maker", category: "Appliances", price: 220, inStock: true },
];


//map metho 
//map is a mordern javascript method 
//it will bassically transform the array 
// t will create a new array 
//orriginal array remain unchanged.

const productName=products.map(product=>{
    return product.name;
})

console.log(productName);
console.log(products);

// const arr=[10,20 ,30 ,40];

// const transformArr=arr.map(num=>num*2);

// console.log(transformArr);
// console.log(arr);

const arr=[10,20 ,30 ,40];

const transformArr=arr.map(num=>{
    return num*2;
});
console.log(transformArr);
console.log(arr);


const availableProduct=products.filter(product=>{
    return product.inStock===true && product.category==="Electronics" && product.price>600;
});

console.log(availableProduct);
// console.log(products);


//reduce method

const totalStockValue=products.reduce((sum,product)=>{
    return sum+product.price;
},0);

console.log(totalStockValue)




//find method

//find->it stops and return the vry first eleement that matches the conditions

const coffeeMaker=products.find(product=>{
    return product.name==="Coffee Maker";
});

console.log(coffeeMaker);


//some() -> at least one element in the array passes the test it will return the true.

const hasOutOfStock=products.some(product=>{
    return product.inStock===false;
})

console.log(hasOutOfStock);


//every -> checks if all the element in the array pass the test  , return true or false

const areAllItemsINStock=products.every(product=>{
    return product.inStock===true;
});

console.log(areAllItemsINStock);



//curring function in javascript

//curring is usefull in js to breakdown in complex function call into smaller , more manageble  steps


// function add(a,b)
// {
//     return a+b;
// }

// console.log(add(4,5));


function add(a){
    return function(b)
    {
        return a+b;
    }
}

const addTwo=add(5);
console.log(addTwo(4));


function addition(a)
{
    return function(b)
    {
        return function(c)
        {
            return a+b+c;
        }
    }
}

const threeAdd=addition(6);
const threeAdition=threeAdd(5);
console.log(threeAdition(4));