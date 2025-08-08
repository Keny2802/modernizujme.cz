const header = document.querySelector(".header");
const headerNavLinksWrapper = header.querySelector(".header-nav-links-wrapper");
const headerLogo = document.querySelector(".header-logo-wrapper");
const headerLogoContent = headerLogo.querySelector(".header-logo-content");
const headerLinks = document.querySelectorAll(".header-nav-link");
// const hamburgerMenuBTN = document.getElementById("hamburger-btn");
// const mobileMenu = document.getElementById("side-panel");
// const mobileMenuLogoContent = mobileMenu.querySelector(".side-panel-logo-content");
// const mobileMenuLinks = document.querySelectorAll(".side-panel-nav-link");

const hamburgerMenuBTN = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("side-panel");
const mobileMenuLogoContent = mobileMenu.querySelector(".side-panel-logo-content");
const mobileMenuLinks = document.querySelectorAll(".side-panel-nav-link");
const hero = document.getElementById("hero");
const sectionCTALinks = document.querySelectorAll(".section-main-cta-link");
const footerLinks = document.querySelectorAll(".footer-fast-links-list-item-link");

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

window.addEventListener("resize", function(evt) {
    if (this.window.innerWidth >= 768) {
        headerLogo.classList.remove("hidden");
        mobileMenu.classList.remove("open");
        hamburgerMenuBTN.classList.remove("open");
    };
});

hamburgerMenuBTN.addEventListener("click", function(evt) {
    hamburgerMenuBTN.classList.toggle("group-[.open]");
    hamburgerMenuBTN.classList.toggle("open");
    headerLogo.classList.toggle("hidden");
    // mobileMenu.classList.toggle("-translate-x-full");
    // mobileMenu.classList.toggle("side-panel-motion-negative");
    mobileMenu.classList.toggle("open");
});

mobileMenuLinks.forEach((mobileMenuLink) => {
    mobileMenuLink.addEventListener("click", function(evt) {
        evt.preventDefault();

        headerLogo.classList.remove("hidden");
        hamburgerMenuBTN.classList.remove("open");
        // mobileMenu.classList.add("-translate-x-full");
        // mobileMenu.classList.add("side-panel-motion-negative");
        mobileMenu.classList.remove("open");

        const targetID = evt.target.getAttribute("href").substring(1);
        const targetLink = document.getElementById(targetID);

        if (targetLink) {
            targetLink.scrollIntoView({
                behavior: "smooth"
            });
        };
    });
});

sectionCTALinks.forEach((sectionCTALink) => {
    sectionCTALink.addEventListener("click", function(evt) {
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

footerLinks.forEach((footerLink) => {
    footerLink.addEventListener("click", function(evt) {
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

gsap.registerPlugin(ScrollTrigger);

// toggleActions: "play reset play reset"
// gsap.to("#about-main-heading", {
//     scrollTrigger: {
//         trigger: "#about-main-heading",
//         start: "top 80%",
//     },

//     opacity: 1,
//     y: 0,
//     duration: 1,
//     ease: "power2.out"
// });

// gsap.to("#about-main-subheadline", {
//     scrollTrigger: {
//         trigger: "#about-main-subheadline",
//         start: "top 85%",
//     },

//     opacity: 1,
//     y: 0,
//     duration: 1,
//     delay: 0.2,
//     ease: "power2.out"
// });

gsap.utils.toArray(".section-fade").forEach((item, index) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
        },

        opacity: 1,
        y: 0,
        duration: 1,
        delay: parseFloat(item.dataset.delay) || 0,
        ease: "power2.out"
    });
});

gsap.utils.toArray(".about-list-item").forEach((item, index) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out"
    });
});

document.addEventListener("click", (evt) => {
    const target = evt.target;
    const clickedInsidePanel = mobileMenu.contains(target);
    const clickedToggleBTN = hamburgerMenuBTN.contains(target);


    if (!clickedInsidePanel && !clickedToggleBTN) {
        headerLogo.classList.remove("hidden");
        mobileMenu.classList.remove("open");
        hamburgerMenuBTN.classList.remove("open");
    };
});