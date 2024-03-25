

// Select the loading animation element
const loadingAnimation = document.getElementById('loading-overlay');

// Function to hide the loading animation after 5 seconds
const hideLoadingAnimation = () => {
    loadingAnimation.style.display = 'none';
};

// Call the function to hide the loading animation after 3 seconds
setTimeout(hideLoadingAnimation, 3500); // 3000 milliseconds = 3 seconds



const BASE_URL ="https://open.er-api.com/v6/latest";

const dropdwons = document.querySelectorAll(".dropdown select");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

const btn = document.querySelector("form button");
const msg = document.querySelector("#msg");

for (let select of dropdwons){
    for(currCode in countryList){
        let newOption =document.createElement( "option" );
        newOption.innerText= currCode;
        newOption.value = currCode;
        if(select.name =="from" && currCode == "USD"){
            newOption.selected = "selected";
        } else if(select.name =="to" && currCode == "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(eve)=>{
        updateFlag(eve.target);
    } );
}

const updateFlag = (element) =>{
    let currCode = element.value;
    let conCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${conCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src= newSrc;
}

// Function to validate input value
const validateInput = (evt) => {
    const input = evt.target;
    const value = input.value;
    // Replace non-digit characters with empty string
    input.value = value.replace(/\D/g, ''); // \D matches any non-digit character

    // Optionally, you can also display a message to the user indicating that only digits are allowed
    // You can display this message in the same msg element where you display the conversion result
    if (value !== input.value) {
        msg.innerText = "Please enter digits only.";
    } else {
        msg.innerText = ""; // Clear the message if the input is valid
    }
};

// Attach input event listener to the amount input field
document.querySelector(".amount input").addEventListener("input", validateInput);



btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" | amtVal < 1){
        amtVal =1;
        amount.value="1";
    }
     
    //console.log(fromCurr.value,toCurr.value);
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}`
    let response = await fetch(URL);
    let data = await response.json();
    const rate = data.rates[toCurr.value.toUpperCase()]; 
   

    let finalAmount = amtVal * rate;
    // toCurr.value.style.color = "green";
    //msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

    msg.innerHTML = `${amtVal} ${fromCurr.value} = <span style="color: aquamarine;">${finalAmount} ${toCurr.value}</span>`;


});
