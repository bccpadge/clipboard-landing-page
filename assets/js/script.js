// change theme to your preference
const themeSelect = document.querySelector("[data-js-theme]"),
  defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

let dataTheme = defaultTheme ? "dark" : "light";
dataTheme = localStorage.getItem("theme") || dataTheme;
document.documentElement.dataset.theme = dataTheme;

themeSelect.addEventListener("change", () => {
  dataTheme = themeSelect.value;
  localStorage.setItem("theme", dataTheme);
  document.documentElement.dataset.theme = dataTheme;
})

// scroll to top button
const scrollTopBtn = document.querySelector("[data-js-top]");

window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("active", window.scrollY > 800);
})

const footerListItems = document.querySelectorAll("[data-js-item]");

