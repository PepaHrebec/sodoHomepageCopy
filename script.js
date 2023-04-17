const dropdown = document.querySelector(".hidden-dropdown");
const btn = document.querySelector(".dropdown-button");

btn.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});
