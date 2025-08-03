const header = document.getElementById("header");
const headerLinks = document.querySelectorAll(".header-link");
const headerLogo = document.getElementById("header-logo");
const hamburgerBTN = document.getElementById("hamburger-btn");
const mobilePanel = document.getElementById("side-panel");
const mobileMenuLinks = document.querySelectorAll(".mobile-header-link");
const hero = document.getElementById("hero");
const overlay = document.getElementById("overlay");
const filterTabBTNS = document.querySelectorAll(".filter-tab-btn");
const carItems = document.querySelectorAll(".our-car");
const pricingFaqToggles = document.querySelectorAll(".pricing-faq-toggle");
const pricingFaqContents = document.querySelectorAll(".pricing-faq-content-wrapper");
const pricingFaqIcons = document.querySelectorAll(".pricing-faq-toggle-icon");
const footerYear = document.querySelector(".footer-year");
const footerLinks = document.querySelectorAll(".footer-link");
const sectionCTALinks = document.querySelectorAll(".section-cta-link");

window.addEventListener("scroll", function(evt) {
    if (window.scrollY > 0) {
        header.classList.add("bg-black");
    } else {
        // header.classList.remove("backdrop-blur-md", "bg-black/60", "shadow-md");
        header.classList.remove("bg-black");
    };
});

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

hamburgerBTN.addEventListener("click", function(evt) {
    headerLogo.classList.toggle("hidden");
    hamburgerBTN.classList.toggle("group-[.open]");
    hamburgerBTN.classList.toggle("open");
    mobilePanel.classList.toggle("-translate-x-full");
    // overlay.classList.toggle("hidden");
    overlay.classList.toggle("opacity-60");
});

mobileMenuLinks.forEach((mobileMenuLink) => {
    mobileMenuLink.addEventListener("click", function(evt) {
        evt.preventDefault();

        headerLogo.classList.remove("hidden");
        hamburgerBTN.classList.remove("open");
        mobilePanel.classList.add("-translate-x-full");
        overlay.classList.remove("opacity-60");
        
        const targetID = evt.target.getAttribute("href").substring(1);
        const targetLink = document.getElementById(targetID);

        if (targetLink) {
            targetLink.scrollIntoView({
                behavior: "smooth"
            });
        };
    });
});

// hero
// document
hero.addEventListener("click", function(evt) {
    headerLogo.classList.remove("hidden");
    hamburgerBTN.classList.remove("open");
    mobilePanel.classList.add("-translate-x-full");
    overlay.classList.remove("opacity-60");
});

filterTabBTNS.forEach((filterTabBTN) => {
    filterTabBTN.addEventListener("click", function(evt) {
        const filter = filterTabBTN.getAttribute("data-filter-tab");

        // Přepne aktivní třídu
        filterTabBTNS.forEach((otherFilterTabBTN) => {
           otherFilterTabBTN.classList.remove("bg-blue-600"); 
        });

        filterTabBTN.classList.add("bg-blue-600");
        
        // Filtrování aut
        carItems.forEach((carItem) => {
            const carType = carItem.getAttribute("data-car-type");

            if (filter === "all" || filter === carType) {
                carItem.classList.remove("hidden");
            } else {
                carItem.classList.add("hidden");
            };
        });
    });
});

pricingFaqToggles.forEach((pricingFaqToggle) => {
    pricingFaqToggle.addEventListener("click", function(evt) {
        const pricingFaqContent = pricingFaqToggle.nextElementSibling;
        const pricingFaqIcon = pricingFaqToggle.querySelector(".pricing-faq-svg");

        pricingFaqToggles.forEach((otherPricingFaqToggle) => {
            if (otherPricingFaqToggle !== pricingFaqToggle) {
                otherPricingFaqToggle.nextElementSibling.classList.add("hidden");
                otherPricingFaqToggle.querySelector(".pricing-faq-svg").classList.remove("rotate-180");
            };
        });

        pricingFaqContent.classList.toggle("hidden");
        pricingFaqIcon.classList.toggle("rotate-180");
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

// overlay.addEventListener("click", function(evt) {
//     hamburgerBTN.classList.remove("open");
//     mobilePanel.classList.add("-translate-x-full");
//     overlay.classList.add("hidden");
// });

function getFooterYear() {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = currentYear;
};

getFooterYear();