const header = document.querySelector(".header");
const headerNavLinksWrapper = header.querySelector(".header-nav-links-wrapper");
const headerLogo = document.querySelector(".header-logo-wrapper");
const headerLogoContent = headerLogo.querySelector(".header-logo-content");
const headerLinks = document.querySelectorAll(".header-nav-link");
const hamburgerMenuBTN = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("side-panel");
const mobileMenuLogoContent = mobileMenu.querySelector(".side-panel-logo-content");
const mobileMenuLinks = document.querySelectorAll(".side-panel-nav-link");
const hero = document.getElementById("hero");

const slider = document.getElementById("slider");
const prevBTN = document.getElementById("prev");
const nextBTN = document.getElementById("next");
const dotsWrapper = document.getElementById("dots");
const dots = dotsWrapper.querySelectorAll(".dot");
const totalSliderImages = slider.children.length;
let sliderIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

const sectionCTALinks = document.querySelectorAll(".section-main-cta-link");
const hashNavLinks = document.querySelectorAll(".hash-nav-link");
const sectionFades = document.querySelectorAll(".section-fade");
const footerLinks = document.querySelectorAll(".footer-fast-links-list-item-link");

window.addEventListener("scroll", function(evt) {
    if (window.scrollY > 0) {
        header.classList.add("backdrop-blur-md");
        headerNavLinksWrapper.classList.remove("text-neutral-200");
        headerNavLinksWrapper.classList.add("text-black");
        headerLogoContent.classList.remove("text-neutral-200");
        headerLogoContent.classList.add("text-black");
        hamburgerMenuBTN.querySelectorAll("span").forEach((span) => span.classList.add("bg-black"));
        mobileMenuLogoContent.classList.remove("text-white");
        mobileMenuLogoContent.classList.add("text-black");
        mobileMenuLinks.forEach((mobileMenuLink) => mobileMenuLink.classList.add("text-black"));
    } else {
        header.classList.remove("backdrop-blur-md");
        headerNavLinksWrapper.classList.remove("text-black");
        headerNavLinksWrapper.classList.add("text-neutral-200");
        headerLogoContent.classList.remove("text-black");
        headerLogoContent.classList.add("text-neutral-200");
        hamburgerMenuBTN.querySelectorAll("span").forEach((span) => span.classList.remove("bg-black"));
        mobileMenuLogoContent.classList.remove("text-black");
        mobileMenuLogoContent.classList.add("text-white");
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
    mobileMenu.classList.toggle("open");
});

hashNavLinks.forEach((hashNavLink) => {
    hashNavLink.addEventListener("click", function(evt) {
        evt.preventDefault();

        const target = evt.target;
        const targetID = target.getAttribute("href").substring(1);
        const targetLink = document.getElementById(targetID);

        if (targetLink) {
            targetLink.scrollIntoView({
                behavior: "smooth"
            });
        };

        if (target.classList.contains("side-panel-nav-link")) {
            headerLogo.classList.remove("hidden");
            mobileMenu.classList.remove("open");
            hamburgerMenuBTN.classList.remove("open");
        };
    });
});

prevBTN.addEventListener("click", function(evt) {
    sliderIndex = (sliderIndex - 1 + totalSliderImages) % totalSliderImages;
    updateCarousel();
});

nextBTN.addEventListener("click", function(evt) {
    sliderIndex = (sliderIndex + 1) % totalSliderImages;
    updateCarousel();
});

slider.addEventListener("touchstart", function(evt) {
    touchStartX = evt.touches[0].clientX;
}, false);

slider.addEventListener("touchend", function(evt) {
    touchEndX = evt.changedTouches[0].clientX;
    handleSwipeGesture();
}, false);

dots.forEach((dot, dotIndex) => {
    dot.addEventListener("click", function(evt) {
        sliderIndex = dotIndex;
        updateCarousel();
    });
});

function updateCarousel() {
    slider.style.transform = `translateX(${-sliderIndex * 100}%)`;

    dots.forEach((dot, dotIndex) => {
        if (dotIndex === sliderIndex) {
            dot.classList.add("bg-[#d4af37]");
            dot.classList.remove("bg-gray-400");
        } else {
            dot.classList.remove("bg-[#d4af37]");
            dot.classList.add("bg-gray-400");
        };
    });
};

function handleSwipeGesture() {
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > 50) {
        if (swipeDistance > 0) {
            sliderIndex = (sliderIndex - 1 + totalSliderImages) % totalSliderImages;
        } else {
            sliderIndex = (sliderIndex + 1) % totalSliderImages;
        };

        updateCarousel();
    };
};

updateCarousel();

document.addEventListener("DOMContentLoaded", function(evt) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".section-fade").forEach((item, index) => {
        gsap.to(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%"
            },

            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
        });
    });
});