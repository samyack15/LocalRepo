console.log("FROM promise.js");
// this is my personal project on understanding of promise and promises chain
function menu (){
     setTimeout(()=>{
        console.log("Paneer Roll");
        console.log("Chicken Roll");
        console.log("Egg Roll");
        
    },2000);
    return null;
}
function eatFood (choice){
    return new Promise ( (resolve, reject ) => {
            setTimeout( () => {
                console.log(choice);
                resolve("Preparing Food");
            },3000);
    });
}

// this was using promise Chain


// eatFood("menu please").then( (res) => {
//     setTimeout(menu,2000);
//     return eatFood("Hmm...").then((res)=> {
//         return eatFood("Ahh.. ").then((res)=> {
//             return eatFood("Panner Roll Please").then((res)=>{
//                 console.log(res);
//             })
//         })
//     })
// });


// Using Async-Await
async function runEatFood(){
    await eatFood("Menu Please!");
    await eatFood(menu());
    await eatFood("Hmm ... ");
    await eatFood("Ahh ... ");
    await eatFood("Paneer Roll Please!");
}
runEatFood();