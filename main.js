const link = document.querySelectorAll(".link");
const company = document.getElementById("company");
const features = document.getElementById("features");

features.addEventListener("click", () => {
  features.nextElementSibling.classList.toggle("hide");
  company.nextElementSibling.classList.add("hide");
});

company.addEventListener("click", () => {
  company.nextElementSibling.classList.toggle("hide");
  features.nextElementSibling.classList.add("hide");
});
