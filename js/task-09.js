/*
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');

const changeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

changeColor.addEventListener("click", bgColorChange);

function bgColorChange() {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
};
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');

const changeColor = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

const bgchangeColor = () => { 
  const color = getRandomHexColor();
  body.setAttribute("style", `background-color: ${color}`);
  colorName.textContent = color;  
};

changeColor.addEventListener('click', bgchangeColor);
