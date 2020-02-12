// Fetch currencies
const currencyOptionsOne = document.getElementById("currency-one");
const currencyOptionsTwo = document.getElementById("currency-two");
// Fetch amounts
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
// rate
const rateEl = document.getElementById("rate");
// swap button
const button = document.getElementById("swap");

calculate()

// FUNCTIONS
// fetch exchange rates and update the DOM
function calculate() {
    const currencyOne = currencyOptionsOne.value
    const currencyTwo = currencyOptionsTwo.value

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currencyTwo]
            rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`

            amountTwo.value = (amountOne.value * rate).toFixed(2)
        })

}

//  EVENT LISTENERS
currencyOptionsOne.addEventListener("change", calculate)
currencyOptionsTwo.addEventListener("change", calculate)
amountOne.addEventListener("input", calculate)
amountTwo.addEventListener("input", calculate)
button.addEventListener("click", () => {
    const temp = currencyOptionsOne.value;
    currencyOptionsOne.value = currencyOptionsTwo.value;
    currencyOptionsTwo.value = temp;

    calculate();
})