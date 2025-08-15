const header = document.querySelector(".header");
const headerLogo = header.querySelector(".header-logo-wrapper");
const hamburgerMenuBTN = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("side-panel");
const sidePanelNavLinks = document.querySelectorAll(".side-panel-nav-link");
const hashNavLinks = document.querySelectorAll(".hash-nav-link");
const dynamicYearSet = document.querySelectorAll(".dynamic-year");
const scrollSectBTN = document.getElementById("scroll-sect-btn");

const currentYear = new Date().getFullYear();

window.addEventListener("scroll", function(evt) {
    if (window.scrollY > 0) {
        header.classList.add("backdrop-blur-lg");
        scrollSectBTN.classList.replace("hidden", "inline-block");
    } else {
        header.classList.remove("backdrop-blur-lg");
        scrollSectBTN.classList.replace("inline-block", "hidden");
    };
});

hamburgerMenuBTN.addEventListener("click", function(evt) {
    hamburgerMenuBTN.classList.toggle("group-[.open]");
    hamburgerMenuBTN.classList.toggle("open");
    headerLogo.classList.toggle("hidden");
    mobileMenu.classList.toggle("open");
});

sidePanelNavLinks.forEach((sidePanelNavLink) => {
    sidePanelNavLink.addEventListener("click", function(evt) {
        headerLogo.classList.remove("hidden");
        hamburgerMenuBTN.classList.remove("open");
        mobileMenu.classList.remove("open");
    });
});

hashNavLinks.forEach((hashNavLink) => {
    hashNavLink.addEventListener("click", function(evt) {
        evt.preventDefault();

        const target= evt.target;
        const targetID = target.getAttribute("href").substring(1);
        const targetLink = document.getElementById(targetID);

        if (targetLink) {
            targetLink.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

dynamicYearSet.forEach((dynamicYear) => {
    dynamicYear.textContent = currentYear;
});

document.addEventListener("click", function(evt) {
    const target = evt.target;
    const clickedInsidePanel = mobileMenu.contains(target);
    const clickedToggleBTN = hamburgerMenuBTN.contains(target);

    if (!clickedInsidePanel && !clickedToggleBTN) {
        headerLogo.classList.remove("hidden");
        mobileMenu.classList.remove("open");
        hamburgerMenuBTN.classList.remove("open");
    };
});