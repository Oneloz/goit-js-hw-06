/* const controller = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

controller.addEventListener('input', (event) => {
  span.style.fontSize = (`${event.currentTarget.value}px`);
}); */


const controller = document.querySelector('#font-size-control')
const span = document.querySelector('#text')

controller.addEventListener('change', (event) => {
  span.style.fontSize = (`${event.currentTarget.value}px`);
}); 