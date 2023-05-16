const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", controlInput);

function controlInput() {
  const maxLength = inputEl.getAttribute("data-length");
  if (inputEl.value.length !== Number(maxLength)) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
