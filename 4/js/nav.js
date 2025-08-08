const header = document.querySelector(".header");
const headerNavLinksWrapper = header.querySelector(".header-nav-links-wrapper");
const headerLogo = document.querySelector(".header-logo-wrapper");
const headerLogoContent = headerLogo.querySelector(".header-logo-content");
const headerLinks = document.querySelectorAll(".header-nav-link");
const hamburgerMenuBTN = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("side-panel");
const mobileMenuLogoContent = mobileMenu.querySelector(".side-panel-logo-content");
const mobileMenuLinks = document.querySelectorAll(".side-panel-nav-link");

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

window.addEventListener("scroll", function(evt) {
    if (window.scrollY > 0) {
        header.classList.add("backdrop-blur-md");
        headerNavLinksWrapper.classList.add("text-black");
        headerLogoContent.classList.add("text-black");
        hamburgerMenuBTN.querySelectorAll("span").forEach((span) => span.classList.add("bg-black"));
        mobileMenuLogoContent.classList.add("text-black");
        mobileMenuLinks.forEach((mobileMenuLink) => mobileMenuLink.classList.add("text-black"));
    } else {
        header.classList.remove("backdrop-blur-md");
        headerNavLinksWrapper.classList.remove("text-black");
        headerLogoContent.classList.remove("text-black");
        hamburgerMenuBTN.querySelectorAll("span").forEach((span) => span.classList.remove("bg-black"));
        mobileMenuLogoContent.classList.remove("text-black");
        mobileMenuLinks.forEach((mobileMenuLink) => mobileMenuLink.classList.remove("text-black"));
    };
});