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

closeMobileMenuWhenMML();
showMobileMenu();
closeMobileMenu();