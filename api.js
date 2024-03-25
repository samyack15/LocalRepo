const URL = "https://cat-fact.herokuapp.com/facts";
const factsPara = document.querySelector("#facts");
const btn= document.querySelector("#btn");

let i=0;

// const getFacts = async () => {
//     let response = await fetch (URL);
//     console.log(response); //Json format
//     let data = await response.json();
//     factsPara.innerText = data[i].text;
//     if(i< (data.length -1 )){
//         i++;
//     }
//     else{
//         i=0;
//     }
// }

// this can be acheived using promise chain

function getFacts(){
    fetch(URL).then((response) => {
        return response.json();
    }).then((data)=> {
        console.log(data);
        factsPara.innerHTML =data[2].text;
    });
}



btn.addEventListener("click",getFacts);