const mainList = document.querySelectorAll('.item');
console.log('Number of categories:', mainList.length);
mainList.forEach(element => {
const heading = element.querySelector('h2');
console.log('Category:', heading.textContent);
const categoriesList = element.querySelectorAll('li')
console.log('Elements:', categoriesList.length);
})
