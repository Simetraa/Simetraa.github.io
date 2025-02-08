const themeButtonEl = document.querySelector("[data-theme-toggle]");
const bodyEl = document.querySelector("body");
const themeTextEl = themeButtonEl.querySelector("span");
const themeIconEl = themeButtonEl.querySelector("i");

const localStorageTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

let theme;

if (localStorageTheme !== null) {
    theme = localStorageTheme;
} else if (prefersDark) {
    theme = "dark";
} else {
    theme = "light";
}

function setTheme(theme) {
    themeIconEl.classList.toggle("fa-moon");
    themeIconEl.classList.toggle("fa-sun");
    bodyEl.setAttribute("data-theme", theme);
    themeTextEl.textContent = theme === "dark" ? "Dark mode" : "Light mode";

}

themeButtonEl.addEventListener("click", function () {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    setTheme(theme);
})

setTheme(theme);