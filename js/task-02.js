const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const itemEl = document.createElement('li');
  itemEl.type = 'li';
  itemEl.classList.add('item');
  itemEl.textContent = option;

  return itemEl;
});

console.log(elements);
ingredientsUl.append(...elements);