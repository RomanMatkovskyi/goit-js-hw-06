const mainList = document.querySelectorAll(".item");
console.log("Number of categories:", mainList.length);
mainList.forEach((element) => {
  const heading = element.firstElementChild;
  console.log("Category:", heading.textContent);
  const categoriesList = element.lastElementChild;
  const elValue = categoriesList.children;
  console.log("Elements:", elValue.length);
});
