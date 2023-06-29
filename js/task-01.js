const categoriesEl = document.querySelector('#categories');

console.log(`Number of categories: ${categoriesEl.children.length}`);

// 

const categoriesCards = document.querySelectorAll('.item');

categoriesCards.forEach(el => {
const categoryName = el.querySelector('h2');
console.log(`Category: ${categoryName.textContent}`);

const listOfCategoryLength = el.querySelectorAll('li');
console.log(`Elements: ${listOfCategoryLength.length}`);
})