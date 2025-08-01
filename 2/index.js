let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;
let carouselIndex = 0;

const header = document.getElementById("header");
const headerLogo = header.querySelector(".logo-content");
const headerLinks = document.querySelectorAll(".navigation-link");;
const sectionCtaBTNS = document.querySelectorAll(".section-cta-btn");
const hamburger = document.getElementById("hamburger");
const toggleThemeBTN = document.getElementById("theme-toggle");
const toggleThemeBtnICON = document.getElementById("theme-icon");
const menu = document.getElementById("mobile-menu-header");
const menuLinks = menu.querySelectorAll(".mobile-menu-link");
const hero = document.getElementById("hero");
const taglineEL = hero.querySelector(".hero-tagline");
const monthlyBTN = document.getElementById("monthly-tab");
const annuallyBTN = document.getElementById("annually-tab");
const monthlyPlans = document.getElementById("monthly-plans");
const annuallyPlans = document.getElementById("annually-plans");
const faqToggles = document.querySelectorAll(".faq-toggle");
const carousel = document.getElementById("review-carousel");
const carouselPrevBTN = document.getElementById("controls-prev-btn");
const carouselNextBTN = document.getElementById("controls-next-btn");
const totalCarouselItems = carousel.children.length;

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

sectionCtaBTNS.forEach((sectionCtaBTN) => {
    sectionCtaBTN.addEventListener("click", function(evt) {
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

monthlyBTN.addEventListener("click", function(evt) {
    monthlyPlans.classList.remove("hidden");
    annuallyPlans.classList.add("hidden");
    monthlyBTN.classList.add("active-tab");
    annuallyBTN.classList.remove("active-tab");
});

annuallyBTN.addEventListener("click", function(evt) {
    annuallyPlans.classList.remove("hidden");
    monthlyPlans.classList.add("hidden");
    annuallyBTN.classList.add("active-tab");
    monthlyBTN.classList.remove("active-tab")
});

faqToggles.forEach((faqToggle, faqToggleIndex) => {
    faqToggle.addEventListener("click", function(evt) {
        const faqContent = faqToggle.nextElementSibling;
        const faqIcon = faqToggle.querySelector(".faq-svg");

        // zavřít ostatní
        faqToggles.forEach((otherFaqToggle) => {
            if (otherFaqToggle !== faqToggle) {
                otherFaqToggle.nextElementSibling.classList.add("hidden");
                otherFaqToggle.querySelector(".faq-svg").classList.remove("rotate-180");
            };
        });

        faqContent.classList.toggle("hidden");
        faqIcon.classList.toggle("rotate-180");
    });
});

carouselNextBTN.addEventListener("click", function(evt) {
    carouselIndex = (carouselIndex + 1) % totalCarouselItems;
    updateCarousel();
});

carouselPrevBTN.addEventListener("click", function(evt) {
    carouselIndex = (carouselIndex - 1 + totalCarouselItems) % totalCarouselItems;
    updateCarousel();
});

setInterval(() => {
    carouselIndex = (carouselIndex + 1) % totalCarouselItems;
    updateCarousel();
}, 10000);

const tagLines = [
    "Bez stresu a papírování.",
    "Vše na jednom místě.",
    "Vaši nájemníci Vám poděkují.",
    "Rychlé vyúčtování jedním klikem",

    "Automatické upomínky a platby.",
    "Správa nájmů nikdy nebyla jednodušší.",
    "Měj přehled o každé nemovitosti.",
    "Jednoduché rozhraní, silné funkce.",
    "Ušetři čas, energii i starosti.",
    "Profesionální nástroj pro správce a pronajímatele."
];

function typeTagLine() {
    const currentLine = tagLines[lineIndex];
    const visibleText = currentLine.substring(0, charIndex);

    taglineEL.textContent = visibleText + (charIndex % 2 === 0 ? "|" : "");

    if (!isDeleting && charIndex < currentLine.length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    } else if (!isDeleting && charIndex === currentLine.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        // lineIndex = (lineIndex + 1) % tagLines.length;
        lineIndex = (lineIndex + 1) % tagLines.length;
    };

    const delay = isDeleting ? 40 : 80;

    setTimeout(typeTagLine, delay);
};

function updateCarousel() {
    const offset = -carouselIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
};

typeTagLine();