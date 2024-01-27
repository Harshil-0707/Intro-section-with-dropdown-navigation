const closeMenu = document.getElementById("close-menu");
const linksRegister = document.getElementById("links-register1");
const openMenu = document.getElementById("open-menu");
const company = document.getElementById("company");
const features = document.getElementById("features");

features.addEventListener("click", () => {
  company.nextElementSibling.classList.add("hide");
  features.nextElementSibling.classList.toggle("hide");
});

company.addEventListener("click", () => {
  company.nextElementSibling.classList.toggle("hide");
  features.nextElementSibling.classList.add("hide");
});

openMenu.onclick = () => {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  linksRegister.style.display = "block";
};

closeMenu.onclick = () => {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  linksRegister.style.display = "none";
};
