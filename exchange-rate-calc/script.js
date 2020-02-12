// Fetch currencies
const currencyOptionsOne = document.getElementById("currency-one");
const currencyOptionsTwo = document.getElementById("currency-two");
// Fetch amounts
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two"); 
// rate
const rate = document.getElementById("rate");
// swap button
const button = document.getElementById("swap");


// FUNCTIONS
// fetch exchange rates and update the DOM
function calculate() {
    const currencyOne = currencyOptionsOne.value
    const currencyTwo = currencyOptionsTwo.value
    console.log(currencyOne,currencyTwo)
     
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            const rate = data.rates[currencyTwo]
            console.log(rate)
        })
}

//  EVENT LISTENERS
currencyOptionsOne.addEventListener("change", calculate) 
currencyOptionsTwo.addEventListener("change", calculate) 
amountOne.addEventListener("input", calculate) 
amountTwo.addEventListener("input", calculate)
button.addEventListener("click", calculate)