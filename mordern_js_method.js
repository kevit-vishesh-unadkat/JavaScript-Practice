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