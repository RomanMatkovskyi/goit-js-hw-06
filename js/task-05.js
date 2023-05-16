const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");
inputEl.addEventListener("input", logName);

function logName() {
  if (inputEl.value) {
    spanEl.textContent = inputEl.value;
  } else {
    spanEl.textContent = "Anonymous";
  }
}
