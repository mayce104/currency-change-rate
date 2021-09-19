const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const currencyEl_two = document.getElementById('currency-two');


const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rates and update the dom 
  function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    fetch("https://open.exchangerate-api.com/v6/latest")
      .then(res => res.json())
      .then(data => {
      //console.log(data);
      const rate = data.rates(curency_two);

      rateEl.innerText =`1 ${currency_one} = ${currency_two}`;


      
      console.log(rate);
  })
}
// Event listener 
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_two.addEventListener('input', calculate);

 calculate();