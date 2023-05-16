let counterValue = 0;
let span = document.querySelector('span')
const decrement = document.querySelector('button[data-action="decrement"]');
decrement.addEventListener('click', decrementValue);
const increment = document.querySelector('button[data-action="increment"]');
increment.addEventListener('click', incrementValue);

function decrementValue() {
    counterValue -= 1;
    span.textContent = counterValue;
};
function incrementValue() {
    counterValue += 1;
    span.textContent = counterValue;
};
