/*const listEl = document.querySelectorAll('#categories li.item')

const quantity = listEl.length;
console.log(`Number of categories: ${quantity}`)

listEl.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`)
});*/


const listEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((item) => {
    console.log(`Category: ${item.children[0].textContent}`);
    console.log(`Elements: ${item.children[1].children.length}`);
});