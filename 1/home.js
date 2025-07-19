let isOpened = false;
let isContentOpened = false;
let isSelectOptionClicked = false;

const body = document.body;

const mobileMenu = document.querySelector(".mobile-header");
const siteToggle = document.querySelector(".menu");
const mobileMenuToggle = document.querySelector(".mobile-header-icon");
const serviceContainer = document.querySelector(".services-wrapper");
const clientsChooseCTA = document.querySelector(".client-choose-property");
const clientsSelectContainer = document.querySelector(".clients-select-container");
const clientSelectOptions = clientsSelectContainer.querySelectorAll(".clients-select-option");
const showUpNextFieldCTA = document.querySelector(".show-up-next-content-field");
const showUpNextContent = document.querySelector(".next-content-to-show-up");

function customSiteNavLinks() {
    const siteNavLinks = document.querySelectorAll(".nav-link");

    siteNavLinks.forEach((siteNavLink) => {
        siteNavLink.addEventListener("click", function(evt) {
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
};

function customMobileNavLinks() {
    const mobileNavLinks = mobileMenu.querySelectorAll(".mobile-nav-link");

    mobileNavLinks.forEach((mobileNavLink) => {
        mobileNavLink.addEventListener("click", function(evt) {
            evt.preventDefault();
            mobileMenu.classList.remove("show");

            const target = evt.target;
            const targetID = target.getAttribute("href").substring(1);
            const targetLink = document.getElementById(targetID);

            if (targetLink) {
                targetLink.scrollIntoView({
                    behavior: "smooth"
                });
            };

            body.style.overflowY = !mobileMenu.classList.contains("show") ? "auto" : "hidden";
        });
    });
};

function customServicePhotos() {
    const servicePhotos = serviceContainer.querySelectorAll(".job-service-photo");

    servicePhotos.forEach((servicePhoto, servicePhotoIndex) => {
        servicePhoto.setAttribute("draggable", "false");
        servicePhoto.style.userSelect = "none";
    });
};

siteToggle.addEventListener("click", function(evt) {
    mobileMenu.classList.add("show");

    body.style.overflowY = mobileMenu.classList.contains("show") ? "hidden" : "auto";
});

mobileMenuToggle.addEventListener("click", function(evt) {
    mobileMenu.classList.remove("show");

    body.style.overflowY = !mobileMenu.classList.contains("show") ? "auto" : "hidden";
});

showUpNextFieldCTA.addEventListener("click", function(evt) {
    isContentOpened = !isContentOpened;
    const showUpNextFieldCTAICON = showUpNextFieldCTA.querySelector(".bx-plus, .bx-minus");
    const showUpNextFieldCTASpanText = showUpNextFieldCTA.querySelector(".show-up-next-content-field-text-span");

    showUpNextContent.style.display = isContentOpened ? "block" : "none";

    showUpNextFieldCTAICON.classList.toggle("bx-plus", !isContentOpened);
    showUpNextFieldCTAICON.classList.toggle("bx-minus", isContentOpened);

    showUpNextFieldCTASpanText = isContentOpened ? "Skrýt další pole" : "Zobrazit další pole";
});

clientsChooseCTA.addEventListener("click", function(evt) {
    const target = evt.target;
    isOpened = !isOpened;
    evt.preventDefault();

    clientsSelectContainer.style.opacity = isOpened ? "1" : "0";
});

clientSelectOptions.forEach((selectOption) => {
    selectOption.addEventListener("click", function(evt) {
        isSelectOptionClicked = !isSelectOptionClicked;
        const target = evt.target;

        clientsSelectContainer.style.opacity = isSelectOptionClicked ? "0" : "0";
        clientsChooseCTA.textContent = target.textContent;
    });
});

document.addEventListener("DOMContentLoaded", function(evt) {
    customSiteNavLinks();
    customMobileNavLinks();
    customServicePhotos();
});