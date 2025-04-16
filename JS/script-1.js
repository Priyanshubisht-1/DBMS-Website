// Menue Functionality
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const sectionHeader = document.querySelector("header");
btnOpen.addEventListener("click", function (e) {
  sectionHeader.classList.add("nav-open");
  document.body.style.overflowY = "hidden";
});
btnClose.addEventListener("click", function (e) {
  sectionHeader.classList.remove("nav-open");
  document.body.style.overflowY = "scroll";
});
