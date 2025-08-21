const header = document.querySelector(".header");
const headerLogo = header.querySelector(".header-logo-wrapper");
const headerLinks = document.querySelectorAll(".header-nav-link");
const hamburgerMenuBTN = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("side-panel");
const sidePanelNavLinks = document.querySelectorAll(".side-panel-nav-link");
const hashNavLinks = document.querySelectorAll(".hash-nav-link");
const dynamicYearSet = document.querySelectorAll(".dynamic-year");
const scrollSectionBTN = document.getElementById("scroll-sect-btn");
const footerHeaderNavLinks = document.querySelectorAll(".footer-links-list-item-link");
const sections = document.querySelectorAll("section[id]");

const currentYear = new Date().getFullYear();

window.addEventListener("scroll", function(evt) {
    if (window.scrollY > 0) {
        header.classList.add("backdrop-blur-lg");
        scrollSectionBTN.classList.replace("hidden", "inline-block");
    } else {
        header.classList.remove("backdrop-blur-lg");
        scrollSectionBTN.classList.replace("inline-block", "hidden");
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

document.addEventListener("DOMContentLoaded", function(evt) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const sectionID = entry.target.getAttribute("id");
            const headerNavLink = document.querySelector(`.header-nav-link[href="#${sectionID}"]`);

            if (entry.isIntersecting) {
                headerLinks.forEach((headerLink) => {
                    headerLink.classList.remove("text-yellow-400", "font-semibold");

                    if (headerNavLink) {
                        headerNavLink.classList.add("text-yellow-400", "font-semibold");
                    };
                });
            };
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function(evt) {
    const nextObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const sectionID = entry.target.getAttribute("id");
            const SideheaderNavLink = document.querySelector(`.side-panel-nav-link[href="#${sectionID}"]`);

            if (entry.isIntersecting) {
                sidePanelNavLinks.forEach((sidePanelNavLink) => {
                    sidePanelNavLink.classList.remove("text-yellow-400", "font-semibold");

                    if (SideheaderNavLink) {
                        SideheaderNavLink.classList.add("text-yellow-400", "font-semibold");
                    };
                });
            };
        });
    });

    sections.forEach((section) => {
        nextObserver.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function(evt) {
    const footerHeaderObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const sectionID = entry.target.getAttribute("id");
            const footerNavLink = document.querySelector(`.footer-links-list-item-link[href="#${sectionID}"]`);

            if (entry.isIntersecting) {
                footerHeaderNavLinks.forEach((footerHeaderNavLink) => {
                    footerHeaderNavLink.classList.remove("text-yellow-400", "font-semibold");

                    if (footerNavLink) {
                        footerNavLink.classList.add("text-yellow-400", "font-semibold");
                    };
                });
            };
        });
    });

    sections.forEach((section) => {
        footerHeaderObserver.observe(section);
    });
});