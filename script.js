document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent =
    new Date().getFullYear();
});
const toggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggle.checked = true;
}

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});
