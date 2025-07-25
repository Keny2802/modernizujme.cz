const header = document.getElementById("header");
const headerLogo = header.querySelector(".logo-content");
const headerLinks = header.querySelectorAll(".navigation-link");;
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobile-menu-header");
const menuLinks = menu.querySelectorAll(".mobile-menu-link");
const hero = document.getElementById("hero");

headerLinks.forEach((headerLink) => {
    headerLink.addEventListener("click", function(evt) {
        evt.preventDefault();

        const target = evt.target;
        const targetID = target.getAttribute("href").substring(1);
        const targetLink = document.getElementById(targetID);

        if (targetLink) {
            targetLink.scrollIntoView({
                behavior: "smooth"
            });
        };
    });
});

hamburger.addEventListener("click", function(evt) {
    hamburger.classList.toggle("open");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
});

menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", function(evt) {
        hamburger.classList.remove("open");
        menu.classList.add("hidden");
        menu.classList.remove("flex");

        evt.preventDefault();

        const target = evt.target;
        const targetID = target.getAttribute("href").substring(1);
        const targetLink = document.getElementById(targetID);

        if (targetLink) {
            targetLink.scrollIntoView({
                behavior: "smooth"
            });
        };
    });
});