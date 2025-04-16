// Menue Functionality
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const sectionHeader = document.querySelector("header");
btnOpen.addEventListener("click", function () {
  sectionHeader.classList.add("nav-open");
});
btnClose.addEventListener("click", function () {
  sectionHeader.classList.remove("nav-open");
});

//Sidebar Functionality
const btnSide = document.querySelector(".sid-btn");
const overlay = document.querySelector(".overlay");
const sidebar = document.querySelector(".Sidebar");
btnSide.addEventListener("click", function () {
  overlay.style.opacity = "100";
  document.body.classList.add("sid-func");
});

document.querySelector(".overlay").addEventListener("click", function () {
  overlay.style.opacity = "0";
  document.body.classList.remove("sid-func");
});
