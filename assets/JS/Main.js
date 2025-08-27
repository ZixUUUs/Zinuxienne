const burgerBtn = document.querySelector(".burger-menu");
const navBar = document.querySelector("header nav");

function btnState() {}

burgerBtn.addEventListener("click", () => {
  navBar.classList.add("active");
  burgerBtn.classList.add("open");
});
