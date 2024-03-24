console.log("From Script 2");
/*******************************
 * Date : 13/ Feb/ 2024 
 * DOM part 2 Starts Here
 * 
 */

// let div = document.querySelector( "div" ); 
// let attrId = div.getAttribute("class");
// console.log(attrId); 

// let para = document.querySelector("p");
// console.log(para.setAttribute("class","new class"));


// let txt = document.querySelector("#PQ");
// let button = document.querySelector("#btn");
// let change =true;
// button.addEventListener('click',function(){
//     if (change) {
//         txt.style.color = "brown";
//         txt.style.fontSize = "50px";
//     }
//     else
//     {
//         txt.style.fontSize = "20px";
//     }
//     change =!change;
    
// });


// let newBtn = document.createElement("button");
// newBtn.innerText = "WOW!";
// newBtn.style.backgroundColor="saddlebrown";
// let btnPos = document.querySelector(".insertElements");
// btnPos.append(newBtn);
// // btnPos.remove();


/*******************************
 * Date : 13/ Feb/ 2024 
 * DOM part 2 Ends Here
 */

/*******************************
 * Date : 15/ Feb/ 2024 
 * Events Starts Here
 */

let btn1 = document.querySelector("#btn");
// btn1.onclick = () =>{
//     alert("You Clicked the Button!");
//     console.log("this btn was clicked");
// }

// btn1.addEventListener("click",(e) => {
//     console.log("button was clicked");
//     console.log(e);
// });

// Practice question :  Create a toggle button that changes the screen to dark mode when clicked & light mode when clikced again.

// let mode = document.querySelector(".mode");
// let theme = "light";
// let body = document.querySelector("body")
// mode.addEventListener('click',()=>{
//     if (theme == "light"){
//         theme = "dark";
//         body.classList.add("darkMode");
//         body.classList.remove("lightMode");
//         console.log("Dark mode");
//     }
//     else{
//         theme = "light";
//         console.log("Light mode");
//         body.classList.add("lightMode");
//         body.classList.remove("darkMode");
        
//     }
// });




/*******************************
 * Date : 15/ Feb/ 2024 
 * Events Ends Here
 */


/*******************************
 * Date : 24/ Feb/ 2024 
 * Callbacks, promises & Async Await
 * Starts Here
 */


// function hello () {
//     console.log("Hello!");
// }
// setTimeout(hello,3000); // Timeout hello function will execute afer 3 seconds 3sec= 3000 milsec

// We can do the same by
// setTimeout (() => {
//     console.log("hello!");
// }, 4000);



// What the below code does is we need data 1 after 2 sec and data 2 after data 1 is printed and so on data 3 then data 4

// THis is callback Hell (nested callback)


// function getData (dataId, getNextData){
//     //2s 
//     setTimeout(() => {
//         console.log("Data ",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }
// getData( 1, () => {
//     getData(2, () => {
//         getData(3, ()=> {
//             getData(4);
//         });
//     });
// });



function getData (dataId){
    return new Promise ( (resolve, reject) => {
            setTimeout( () => {
                    console.log("data ",dataId);
                    resolve("success");                  
            }, 3000);
    });
}

//Promise Chain
// This is the idea
//  getData(1).then((res) => {
//     console.log(res);
//     getData(2).then ((res) =>{
//         console.log(res);
//     });
// });

// Actual Promise Chaining
// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// });


//------------------ Async-await -----------
async function getAllData (){
    console.log("Getting data1 ...");
    await getData(1);
    console.log("Getting data2 ...");
    await getData(2);
    console.log("Getting data3 ...");
    await getData(3);
}
getAllData();






/*******************************
 * Date : 24/ Feb/ 2024 
 * Callbacks, promises & Async Await
 * Ends Here
 */