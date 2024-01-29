const company = document.querySelectorAll(".two");
const features = document.querySelectorAll(".one");
const openMenu = document.getElementById("open-menu");
const linksRegister = document.getElementById("links-register1");
// const on = document.getElementsByTagName

features.forEach((fun) => openDropDown(fun));
company.forEach((com) => openDropDown(com));

function openDropDown(args) {
  args.addEventListener("click", () => {
    args.nextElementSibling.classList.toggle("hide");
    const icon = args.querySelector(".arrowImg img");
    icon.classList.toggle("arrow");
    if (icon.classList.contains("arrow")) {
      icon.src = "./images/icon-arrow-up.svg";
    } else {
      icon.src = "./images/icon-arrow-down.svg";
    }
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
