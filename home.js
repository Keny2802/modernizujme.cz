const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
const mobileMenuCloseIcon = document.querySelector(".mobile-menu-close-icon");

function closeMobileMenuWhenMML() {
    mobileMenuLinks.forEach((mobileMenuLink) => {
        mobileMenuLink.addEventListener("click", function(evt) {
            mobileMenu.classList.remove("show");
        });
    });
};

function showMobileMenu() {
    mobileMenuIcon.addEventListener("click", function(evt) {
        mobileMenu.classList.toggle("show");
    });
};

function closeMobileMenu() {
    mobileMenuCloseIcon.addEventListener("click", function(evt) {
        mobileMenu.classList.remove("show");
    });
};

function mainHeadercustomLinks() {
    const mainHeader = document.querySelector(".header");
    const mainHeaderLinks = mainHeader.querySelectorAll(".header-link");

    mainHeaderLinks.forEach((mainHeaderLink) => {
        mainHeaderLink.addEventListener("click", function(evt) {
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
};

function mobileHeaderCustomLinks() {
    const mobileHeader = document.querySelector(".mobile-menu");
    const mobileHeaderLinks = mobileHeader.querySelectorAll(".mobile-menu-link");

    mobileHeaderLinks.forEach((mobileHeaderLink) => {
        mobileHeaderLink.addEventListener("click", function(evt) {
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
};

closeMobileMenuWhenMML();
showMobileMenu();
closeMobileMenu();

mainHeadercustomLinks();
mobileHeaderCustomLinks();