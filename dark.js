let darkMode = localStorage.getItem("dark");
const themeSwitch = document.querySelector(".dark-mode-switch");
const body = document.body;

function enableDarkMode() {
    body.classList.add("darkmode");
    localStorage.setItem("dark", "active");
};

function disableDarkMode() {
    body.classList.remove("darkmode");
    localStorage.setItem("dark", null);
};

if (darkMode === "active") enableDarkMode();

themeSwitch.addEventListener("click", function(evt) {
    darkMode = localStorage.getItem("dark");
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});