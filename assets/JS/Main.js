const burgerBtn = document.querySelector(".burger-menu");
const navBar = document.querySelector("header nav");

const openSvg = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="30px"
  height="30px"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M20 7L4 7"
    stroke="#ff5e3a"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="M20 12L4 12"
    stroke="#ff5e3a"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="M20 17L4 17"
    stroke="#ff5e3a"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;

const closeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" fill="white"/>
  <path d="M7 17L16.8995 7.10051" stroke="#ff5e3a" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7 7.00001L16.8995 16.8995" stroke="#ff5e3a" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

burgerBtn.innerHTML = openSvg;

burgerBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");

  if (burgerBtn.classList.contains("open")) {
    burgerBtn.innerHTML = openSvg;
    burgerBtn.classList.remove("open");
  } else {
    burgerBtn.innerHTML = closeSvg;
    burgerBtn.classList.add("open");
  }
});
