const newElement=document.createElement("h2");
newElement.textContent="Hello i am vishesh";
newElement.id="second";


//select an element
const element=document.getElementById("first");
element.after(newElement);

//another example

//create an element
const newElement2=document.createElement("h3");
newElement2.textContent="navratri is coming soon";
newElement2.id="third";

//change the styleing with the help of js dom manupalation
newElement2.style.color="blue";
newElement2.style.backgroundColor="pink";
element.before(newElement2);


//till now :see after , before 
//how to create a new element
//how to select a element
//and make a change in ui with the use of js (html content , css change)


// newElement2.classList.add="diwali";
// newElement2.classList.add="holi";

// newElement2.classList.remove="diwali";



// we can add and remove class 
//with the use of add and remove
//with the use of add ->we can add the class
//with the use of remove ->we can remove the class


//create an element

const list=document.createElement("li");
list.textContent="milk";

//create an second list
const list2=document.createElement("li");
list2.textContent="Tea";

//create an third list element
const list3=document.createElement("li");
list3.textContent="coffee";

//select an element 
const unorderElement=document.getElementById("listing");
unorderElement.append(list);

unorderElement.append(list2);
unorderElement.prepend(list3);


//till now :
//create an element and how to append them into unorderlist
//so for this i saw two method 
//1)append method
//2)prepend method

//but this is not an efficient way to write a code 
//instead of append or prepend seperatly 
//we can use for..of loop 


const arr=['milk','tea','coffee','buter'];

const unorderedElement=document.getElementById("listing");

for (let food of arr)
{
    const listed=document.createElement("li");
    listed.textContent=food;
}
