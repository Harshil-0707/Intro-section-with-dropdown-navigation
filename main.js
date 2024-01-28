const linksRegister = document.getElementById("links-register1");
const openMenu = document.getElementById("open-menu");
const company = document.querySelectorAll(".two");
const features = document.querySelectorAll(".one");
const icons = document.querySelectorAll(".arrowImg img");

features.forEach((fun) => openDropDown(fun));
company.forEach((com) => openDropDown(com));

function openDropDown(args) {
  args.addEventListener("click", () => {
    args.nextElementSibling.classList.toggle("hide");
  });
}

openMenu.onclick = () => {
  openMenu.classList.toggle("active");
  if (openMenu.classList.contains("active")) {
    linksRegister.style.display = "block";
    openMenu.src = "./images/icon-close-menu.svg";
  } else {
    linksRegister.style.display = "none";
    openMenu.src = "./images/icon-menu.svg";
  }
};
