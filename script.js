const dropdown = document.querySelector(".hidden-dropdown");
const btn = document.querySelector(".dropdown-button");

btn.addEventListener("click", () => {
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  } else {
    dropdown.classList.add("show");
  }
});
