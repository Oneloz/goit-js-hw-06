let counterValue = 0;

const valueEl = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const ClickOnDecrementBtn = (event) => {
counterValue -= 1;
  valueEl.textContent = counterValue;
};

const ClickOnIncrementBtn = (event) =>  {
    counterValue += 1;
    
  valueEl.textContent = counterValue;
};;

decrementBtn.addEventListener('click', ClickOnDecrementBtn);
incrementBtn.addEventListener('click', ClickOnIncrementBtn);