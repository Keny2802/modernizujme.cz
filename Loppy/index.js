const headerLinks = document.querySelectorAll(".nav-link");
const mobileHeaderLinks = document.querySelectorAll(".mobile-menu-link");
const mobileMenuToggle = document.querySelector(".mobile-menu");
const menu = document.querySelector(".mobile");
const footerLinks = document.querySelectorAll(".footer-content-wrapper-nav-link");
const footerYear = document.getElementById("year");

headerLinks.forEach((headerLink) => {
    headerLink.addEventListener("click", function(evt) {
        evt.preventDefault();

        const targetID = evt.target.getAttribute("href").substring(1);
        const targetLink = document.getElementById(targetID);

        if (targetLink) {
            targetLink.scrollIntoView({
                behavior: "smooth"
            });
        };
    });
});

mobileHeaderLinks.forEach((mobileHeaderLink) => {
    mobileHeaderLink.addEventListener("click", function(evt) {
        evt.preventDefault();

        const targetID = evt.target.getAttribute("href").substring(1);
        const targetLink = document.getElementById(targetID);

        if (targetLink) {
            targetLink.scrollIntoView({
                behavior: "smooth"
            });

            menu.classList.toggle("hidden");
        };    
    });
});

footerLinks.forEach((footerLink) => {
    footerLink.addEventListener("click", function(evt) {
        evt.preventDefault();

        const targetID = evt.target.getAttribute("href").substring(1);
        const targetLink = document.getElementById(targetID);

        if (targetLink) {
            targetLink.scrollIntoView({
                behavior: "smooth"
            });
        };    
    });
});

mobileMenuToggle.addEventListener("click", function(evt) {
    menu.classList.toggle("hidden");
});

function setFooterYear() {
    const newYear = new Date().getFullYear();

    footerYear.textContent = newYear;
};

setFooterYear();