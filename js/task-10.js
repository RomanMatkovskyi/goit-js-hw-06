function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBox = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputEl.value;
  let boxSize = 20;
  for (let i = 0; i < amount; i += 1) {
    const newEl = document.createElement("div");
    newEl.classList.add("newBox");
    newEl.style.width = boxSize + 10 + "px";
    newEl.style.height = boxSize + 10 + "px";
    newEl.style.backgroundColor = getRandomHexColor();
    divBox.appendChild(newEl);
    boxSize += 10;
  }
}

function destroyBoxes() {
  const boxes = divBox.querySelectorAll(".newBox");
  boxes.forEach((box) => {
    box.remove();
  });
}
