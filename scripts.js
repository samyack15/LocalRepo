

 
/*
* Date: 2/Feb/2024  
*   Variables And Data Types.
*   Template Literals 
*   for loop
*/


// Practice Question
// let userName = prompt("Enter Your full Name Without Spaces");
// let output = "@"+ userName+ userName.length;
// console.log(output);


// Template literals is basically used to print or  display any type of data in a more readable way for eg 
// const pen = {
//     product : "Pen",
//     price : "$10"
// };
// rather than writting 
// console.log("the ", pen.product, " costs $", pen.price); we can write :: 
// let  output = `The ${pen.product} costs ${pen.price}`; 
// this will give the result The Pen costs $10
// console.log(output);

// for-of loop 
// let str = "Samyack";
// for(let i of str){
//  console.log(i);   
// }


// for-in loop
// const person = {name:"Samyack", age :20, country:'INDIA'};
// for (let key in person) {
//     console.log("Key= ", key, " Value = ", person[key]);
// };






// let fullname="Tony Stark";
// console.log("Hello "+fullname+"!");

// const student = {
//     fullname : "Samyack Bansode",
//     age : 20,
//     cgpa : 9,
//     isPass : true
// };
// console.log(student.fullname);

//if i want to change the age later of an object here is how to do it.
//  student["age"] += 1; 
//or we can use dot notation like this: student.age += 1;
//  console.log(student.age);
 // or you can do the same by console.log(student["age"]); 

 /*
* Date: 2/Feb/2024  
*   Variables And Data Types. Ends Here
*
*/
// ---------------------------------------------------------------=-=========----=====-
 /*
* Date: 12/Feb/2024  
*   Arrays, Functions, forEach & Map Start Here
*
*/

// let avengers = ["spiderman", "ironman", "captain america","thor"];

// for (let i of avengers){
//     console.log(i.toUpperCase());
// }

//Practice quesion find the avg of marks
// let marks = [85,97,44,37,76,60];
// let avg= 0;
// for (let i of marks){
//     avg += i;
// }
// avg /= marks.length;
// console.log(`Average of marks is = ${avg}`);

// Practice Question array with prices of 5 items [250,645,300,900,50] have 10% off  discount then what will be the price?

// let items = [250,645,300,900,50];

// for (let i of items){
//     console.log(`Price before discount = ${i}`)
//     let offer = i-(i*0.1);
//     console.log(`Price After Discount = ${offer}/-`);
// }


// push() it adds item form end
// pop() to delete form end
// .toString() returns a new string without changing the array
// concat() joins multiple arrays and returns 
// unshift() add to start shift() delete for start


// let food = ["paneer", "naan", "biryni"];
// food.push("Pizza");
// let popped = food.pop();
// console.log(food);
// console.log(`popped food = ${popped}`);
// console.log(food.toString());
// slice(startindex, endindex) returns a piece of array 
// splice(startindex,delCount,newEl1...) change orignal array (add, remove, replace)

// let marvelHeros = ["spiderman", "ironman", "cap","Dr.Strage","bucky"];
// marvelHeros.unshift("antman");
// let deleted = marvelHeros.shift();
// let dcHeros = ["batman", "flash", "superman"];
// let a = "cyborg";
// let heros = marvelHeros.concat(dcHeros,a);

// console.log(` deleted = ${deleted} ${heros}`);
// console.log(`Slice form 1 = ${marvelHeros.slice(1,2)}`);
// heros.splice(5,4,"samyack");
// heros.splice(0,1,"Iron-Man","Spider-Man");
// console.log(`After Spliced = ${heros}`);


// Practice Question : Create an array to store companies ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"] 1. Remove the first company forom the array 2. Remove Uber and add ola 3. Add amazon at end

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// companies.shift();
// companies.splice(1,1,"OLA");
// companies.push("Amazon");
// console.log(companies);
 

// ARROW Functions : Compact way of writing a function 
// const functionName = (param1, para2,...)=>{ // do some work}

// let sum = (a,b)=>{
//     return a+b;
// } 
// // we can later change the value too because it is a variable 
// sum = 5;
// if there is a single line of code
// const hi = () => console.log("Hi");

// Practice Question: create a fun that returns no. of vovels form a string


// function vowelsFinder (str){
//     let count = 0;
//     for (let i of str){
//         if (i == 'a' || i == 'e'|| i == 'i'|| i == 'o'|| i == 'u'){
//             count++;
//         }
//     }
//     console.log(`Total no. of Vowels present are = ${count}`)
// };



// ForEAch()
// arr.forEach(callBackFunction)
// callBaclFunction is afunction to execute for each element in the array, a callback is a function passed as an argument to another function
// in forEach; arr.forEach((val,index,array)) are used as pararmeter 
// arr.forEach ((val) => { console.log(val);})

// let arr = [1,2,3,4,5];
// // forEach will executed for all elements of arr
// arr.forEach((val, i)=>{
//     // here i is the index 
//     console.log(`New Value = ${val+1} index = ${i}`);
// });


/*
* Interview Question : What is HIGHER ORDER Functin?
forEach is Higher order functions or methods
*/


// ------------MAP method--------
// Map creats a new array with results of some operations. The value its callback returns are used to form new array
// arr.map(callbackFun(value, index, array))
// ===== Main diff btw map and forEach is map returns a new array 

// let num = [1, 2, 3, 4, 5];
// let copyOfNum = num.map((val)=>{
//     return val;
// });
// console.log(copyOfNum);

//-------------Map ends-------

//------------FILTER Method-------
// creates a new array based of condition you provided basically it filters and stores in a new array

// let evenArr = num.filter((val)=>{
//     return val%2==0;
// });
// console.log(evenArr);

//------------FILTER Ends-------

//------------REDUCE Method-------
// Reduce perfoms some operatins and reduces the arrray to single value
// arr.reduce(res/previous/initial,current)

// let sum = num.reduce((pre, cur) => {
//     return pre + cur;
// });
// console.log(sum);
// let max = num.reduce((pre, cur) => {
//     return pre > cur ? pre :cur;
// });
// console.log(`Greater value = ${max}`);




//------------REDUCE Ends-------

/*
* Date: 12/Feb/2024  
*   Arrays, Functions, forEach & Map Ends Here
*
*/
//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
/*
##  Date : 13/ Feb/ 2024
    DOM Statrs Here
##  
*/



// console.log(window.document.body.childNodes[1]);
// console.dir(document.head);
// document.body.childNodes[1].innerText = "sam";


// let classHeading = document.getElementsByClassName("h1Class");
// console.dir(classHeading);
// console.log(classHeading);
// let btn = document.getElementById("btn");
// console.dir(btn);
// let para = document.getElementsByTagName("p");
// console.dir(para);


// let firstEle = document.querySelector(".h1Class");
// console.dir(firstEle);
// let allEle = document.querySelectorAll("#btn");
// console.dir(allEle);

// let hidden = document.querySelector("div");


// Practice Quesion:
// let content = document.getElementById("PQ").innerText;
// let append = " from Samyack";
// let op = content.concat(append);
// let op = PQ.innerText + "sam";
// console.log(op); 

// Practice Question : Create 3 divs and give same class called box and access them and give each new values

// let divs = document.querySelectorAll( ".box" );
// console.log( divs ); 
// divs[0].innerText = "new value 1";
// divs[1].innerText = "new value 2";
// divs[2].innerText = "new value 3";

// we can do the same with for of loop
// let i=1;
// for (div of divs ){
//     div.innerText = `new Value ${i}`;
//     i++;
// }

/*
##  Date : 13/ Feb/ 2024
    DOM Ends Here
##  
*/