const mobileMenuContainer = document.querySelector(".mobile-menu-header");
const closeHeader = document.querySelector(".mobile-menu-header .icon");
const mobileNavLinks = document.querySelectorAll(".mobile-menu-link");

const pdfLink = document.querySelector(".auction-pdf-file-link");
const contextMenu = document.getElementById("contextMenu");
const contextMenuHeight = contextMenu.offsetHeight;
const contextMenuWidth = contextMenu.offsetWidth;
const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;
const contextMenuList = document.getElementById("contextMenuList");
const openInNewTab = document.getElementById("openInNewTab");
const downloadPDF = document.getElementById("downloadPDF");

let PDFHref = "";

const openingHoursOverlay = document.querySelector(".opening-hours-overlay");
const openingHoursOverlayCloseHit = document.querySelector(".opening-hours-overlay-close-hit");
const openingHoursLink = document.querySelector(".contacting-person-opening-hours-link");

let isOpeningHoursOverlay = false;

const carouselTriggerPhotos = document.querySelectorAll(".current-auction-photo");
const carouselOverlay = document.querySelector(".carousel-overlay");
const previewSlides = document.querySelectorAll(".preview-slide");
const currentPhotoContainer = document.querySelector(".current-photo");
const currentPhoto = currentPhotoContainer.querySelector(".current-photo .current");
const photoFrom = currentPhotoContainer.querySelector(".current-photo .from");
const carouselCloseHit = document.querySelector(".carousel-overlay-close-hit");
const slides = document.querySelector(".carousel-slides");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const prevHit = document.querySelector(".carousel-hit-previous");
const nextHit = document.querySelector(".carousel-hit-next");
const totalSlides = slides.children.length;
const hideAll = document.querySelector(".hide-all");
const descOption = document.querySelector(".option-site-desc");
const attachmentOption = document.querySelector(".option-site-attachment");
const contactingPersonOption = document.querySelector(".option-site-contact");
const lookoutOption = document.querySelector(".option-site-lookout");
const compareOption = document.querySelector(".option-site-compare");
const showWrappers = document.querySelectorAll(".show-wrapper");
const comparedAuctionPhotoLeftLink = document.querySelector(".auction-photo-left-link");
const comparedAuctionPhotoRightLink = document.querySelector(".auction-photo-right-link");
const comparedAuctionPhotoSet = document.querySelector(".compared-auction-photo-set");
const firstcomparedAuctionPhotoSetPhoto = document.querySelector(".first-photo");
const comparedAuctionPhotoSetPhotos = comparedAuctionPhotoSet.querySelectorAll(".photo");
const carouselIndex = document.querySelector(".current-photo .current");

const mapOption = document.querySelector(".option-site-map");
let isMapOption = false;

let slideIndex = 0;
let isDescOption = false;
let isAttachmentOption = false;
let isContactingPersonOption = false;
let isLookoutOption = false;
let isCompareOption = false;
let autoSlide = null;
let slideZoom = 1;
let clicked = false;
let xAxis;
let x;
let yAxis;
let y;

function mobileMenu() {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");

    mobileMenuIcon.addEventListener("click", function(evt) {
        mobileMenuContainer.classList.add("show");
    });
};

function openingDays() {
    const days = [
        "neděle",
        "pondělí",
        "úterý",
        "středa",
        "čtvrtek",
        "pátek",
        "sobota",
    ];

    const fakeDate = new Date();
    fakeDate.setDate(fakeDate.getDate() - fakeDate.getDay() + 2);

    const day = days[new Date().getDay()].toLowerCase();
    const dayEls = document.querySelectorAll(".day");

    dayEls.forEach((dayEl) => {
        if (dayEl.textContent.toLowerCase().includes(day)) {
            dayEl.style.marginRight = "4px";
            dayEl.style.padding = "2px";
            dayEl.style.fontWeight = "900";
            dayEl.style.backgroundColor = "#14171a";
            dayEl.style.color = "#ffffff";
        };
    });
};

function updateSlide() {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    currentPhoto.textContent = slideIndex + 1;
    photoFrom.textContent = totalSlides;
};

function startAutoSlide() {
    stopAutoSlide();
    autoSlide = setInterval(() => {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlide();
    }, 5000);
};

function stopAutoSlide() {
    if (autoSlide) clearInterval(autoSlide);
    autoSlide = null;
};

function openCarousel(index) {
    slideIndex = index;
    updateSlide();
    // startAutoSlide();
    carouselOverlay.style.display = "flex";
    document.body.style.overflowY = "hidden";
    // currentPhoto.textContent = index + 1;
    // photoFrom.textContent = totalSlides;
};

function closeCarousel() {
    carouselOverlay.style.display = "none";
    document.body.style.overflowY = "auto";
    // stopAutoSlide();
};

function checkSize(carouselSlide) {
    let containerOut = slides.getBoundingClientRect();
    let carouselSlideIn = carouselSlide.getBoundingClientRect();

    if (parseInt(carouselSlide.style.left) > 0) {
        carouselSlide.style.left = "0px";
    } else if (carouselSlideIn.right < containerOut.right) {
        carouselSlide.style.left = `-${carouselSlideIn.width - containerOut.width}px`;
    };

    if (parseInt(carouselSlide.style.top) > 0) {
        carouselSlide.style.top = "0px";
    } else if (carouselSlideIn.bottom < containerOut.bottom) {
        carouselSlide.style.top = `-${carouselSlideIn.height - containerOut.height}`;
    };
};

function updateThumbnails() {};

function setCarouselSlide() {
    let slideCount = totalSlides;

    carouselIndex.addEventListener("keydown", function(evt) {
        const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];

        if (evt.key === "Enter") {
            evt.preventDefault();
            return;
        };

        if (!/^\d$/.test(evt.key) && !allowedKeys.includes(evt.key)) {
            evt.preventDefault();
        };
    });

    carouselIndex.addEventListener("input", function(evt) {
        const value = parseInt(carouselIndex.innerText, 10);

        if (slideCount < 10) {
            if (carouselIndex.innerText.length > 1) {
                carouselIndex.innerText = carouselIndex.innerText.slice(0, 1);
            };
        };

        if (slideCount >= 10) {
            if (value >= 1 && value <= slideCount) {
                openCarousel(value - 1);
            } else {
                carouselIndex.innerText = "";
            };
        };

        // if (!isNaN(value)) {
        //     openCarousel(value - 1);
        // };

        if (!isNaN(value) && value >= 1 && value <= slideCount) {
            openCarousel(value - 1);
        };
    });
};

closeHeader.addEventListener("click", function(evt) {
    mobileMenuContainer.classList.remove("show");
});

mobileNavLinks.forEach((mobileHeaderLink) => {
    mobileHeaderLink.addEventListener("click", function(evt) {
        // evt.preventDefault();

        // const targetLinkID = evt.target.getAttribute("href").substring(1);
        // const targetLink = document.getElementById(targetLinkID);

        // if (targetLink) {
        //     targetLink.scrollIntoView({
        //         behavior: "smooth"
        //     });
        // };

        mobileMenuContainer.classList.remove("show");
    });
});

pdfLink.addEventListener("contextmenu", function(evt) {
    evt.preventDefault();

    PDFHref = this.getAttribute("href");

    let posX = evt.pageX;
    let posY = evt.pageY;

    if (posX + contextMenuWidth > screenWidth) {
        posX = screenWidth - contextMenuWidth - 10;
    };

    if (posY + contextMenuHeight > screenHeight) {
        posY = screenHeight - contextMenuHeight - 10;
    };

    contextMenu.style.display = "block";
    contextMenu.style.top = `${posY}px`;
    contextMenu.style.left = `${posX}px`;
});

document.addEventListener("click", function(evt) {
    contextMenu.style.display = "none";
});

openInNewTab.addEventListener("click", function(evt) {
    window.open(PDFHref, "_blank");
});

downloadPDF.addEventListener("click", function(evt) {
    const aLink = document.createElement("a");
    aLink.href = PDFHref;
    aLink.download = PDFHref.split("/").pop();
    document.body.appendChild(aLink);

    aLink.click();
    aLink.remove();
});
/*
autoSlide = setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlide();
    // currentPhoto.textContent = slideIndex + 1;
    // photoFrom.textContent = totalSlides;
}, 10000);
*/

carouselTriggerPhotos.forEach((photo, photoIndex) => {
    photo.addEventListener("click", function(evt) {
        openCarousel(photoIndex);
    });

    // photo.addEventListener("mouseenter", function(evt) {
    //     setTimeout(() => {
    //         openCarousel(photoIndex);
    //     }, 500);
    // });
});

carouselSlides.forEach((carouselSlide) => {
    carouselSlide.addEventListener("wheel", function(evt) {
        carouselSlide.style.transformOrigin = `${evt.offsetX} ${evt.offsetY}`;
        slideZoom += evt.deltaY * -0.01;
        slideZoom = Math.min(Math.max(1, slideZoom), 5);
        carouselSlide.style.transform = `scale(${slideZoom})`;

        if (slideZoom == 1) {
            carouselSlide.style.top = "0px";
            carouselSlide.style.left = "0px";
        };
    });

    carouselSlide.addEventListener("mouseup", function(evt) {
        carouselSlide.style.cursor = "auto";
    });

    carouselSlide.addEventListener("mousedown", function(evt) {
        clicked = true;
        xAxis = evt.offsetX - carouselSlide.offsetLeft;
        yAxis = evt.offsetY - carouselSlide.offsetTop;

        carouselSlide.style.cursor = "grabbing";
    });

    window.addEventListener("mouseup", function(evt) {
        clicked = false;
    });

    carouselSlide.addEventListener("mousemove", function(evt) {
        if (!clicked) return;
        evt.preventDefault();

        x = evt.offsetX;
        y = evt.offsetY;

        carouselSlide.style.left = `${x - xAxis}px`;
        carouselSlide.style.top = `${y - yAxis}px`;

        checkSize(carouselSlide);
    });
});

previewSlides.forEach((previewSlide, previewSlideIndex) => {
    previewSlide.addEventListener("click", function(evt) {
        openCarousel(previewSlideIndex);
    });
});

carouselCloseHit.addEventListener("click", closeCarousel);

prevHit.addEventListener("click", function(evt) {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    // currentPhoto.textContent = slideIndex + 1;
    // photoFrom.textContent = totalSlides;
    updateSlide();
    // startAutoSlide();
});

document.addEventListener("keydown", function(evt) {
    if (evt.key === "ArrowLeft") {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
        // startAutoSlide();
    };
});

nextHit.addEventListener("click", function(evt) {
    slideIndex = (slideIndex + 1) % totalSlides;
    // currentPhoto.textContent = slideIndex + 1;
    // photoFrom.textContent = totalSlides;
    updateSlide();
    // startAutoSlide();
});

document.addEventListener("keydown", function(evt) {
    if (evt.key === "ArrowRight") {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateSlide();
        // startAutoSlide();
    };
});

carouselOverlay.addEventListener("click", function(evt) {
    if (evt.target === carouselOverlay) {
        closeCarousel();
    };
});

document.addEventListener("keydown", function(evt) {
    if (evt.key === "Escape") {
        closeCarousel();
    };
});

openingHoursLink.addEventListener("click", function(evt) {
    isOpeningHoursOverlay = !isOpeningHoursOverlay;
    openingHoursOverlay.style.display = "block";
    // document.body.style.overflowY = isOpeningHoursOverlay ? "hidden" : "auto";
});

openingHoursOverlayCloseHit.addEventListener("click", function(evt) {
    openingHoursOverlay.style.display = "none"; 
});

hideAll.addEventListener("click", function(evt) {
    if (isDescOption === true || isAttachmentOption === true
        || isContactingPersonOption === true || isLookoutOption === true
        || isMapOption === true) {
        descOption.style.backgroundColor = "#e0e0e0";
        attachmentOption.style.backgroundColor = "#e0e0e0";
        contactingPersonOption.style.backgroundColor = "#e0e0e0";
        lookoutOption.style.backgroundColor = "#e0e0e0";
        mapOption.style.backgroundColor = "#e0e0e0";
        // compareOption.style.backgroundColor = "#e0e0e0";

        showWrappers.forEach((showWrapper) => {
            showWrapper.classList.remove("show");
        });

        isDescOption = false;
        isAttachmentOption = false;
        isContactingPersonOption = false;
        isLookoutOption = false;
        isMapOption = false;
        // isCompareOption = false;
    };
});

descOption.addEventListener("click", function(evt) {
    isDescOption = !isDescOption;
    const auctionTextContent = document.querySelector(".auction-text-content-description");
    
    auctionTextContent.classList.toggle("show");
    auctionTextContent.scrollIntoView({
        behavior: "smooth"
    });

    descOption.style.backgroundColor = isDescOption ? "#8e8b8b" : "#e0e0e0";
});

attachmentOption.addEventListener("click", function(evt) {
    isAttachmentOption = !isAttachmentOption;
    
    const target = evt.currentTarget;
    const showWrapper1 = document.querySelector(".show-wrapper-1");
    showWrapper1.classList.toggle("show");

    target.style.backgroundColor = isAttachmentOption ? "#8e8b8b" : "#e0e0e0";

    showWrapper1.scrollIntoView({
        behavior: "smooth"
    });
});

contactingPersonOption.addEventListener("click", function(evt) {
    isContactingPersonOption = !isContactingPersonOption;

    const target = evt.currentTarget;
    const showWrapper2 = document.querySelector(".show-wrapper-2");
    showWrapper2.classList.toggle("show");
    target.style.backgroundColor = isContactingPersonOption ? "#8e8b8b" : "#e0e0e0";

    showWrapper2.scrollIntoView({
        behavior: "smooth"
    });
});

lookoutOption.addEventListener("click", function(evt) {
    isLookoutOption = !isLookoutOption;

    const target = evt.currentTarget;
    const showWrapper3 = document.querySelector(".show-wrapper-3");
    showWrapper3.classList.toggle("show");

    target.style.backgroundColor = isLookoutOption ? "#8e8b8b" : "#e0e0e0";

    showWrapper3.scrollIntoView({
        behavior: "smooth"
    });
});

mapOption.addEventListener("click", function(evt) {
    isMapOption = !isMapOption;

    const target = evt.currentTarget;
    const showWrapper5 = document.querySelector(".show-wrapper-5");
    showWrapper5.classList.toggle("show");

    target.style.backgroundColor = isMapOption ? "#8e8b8b" : "#e0e0e0";

    showWrapper5.scrollIntoView({
        behavior: "smooth"
    });
});

// compareOption.addEventListener("click", function(evt) {
//     isCompareOption = !isCompareOption;

//     const target = evt.currentTarget;
//     const showWrapper4 = document.querySelector(".show-wrapper-4");
//     showWrapper4.classList.toggle("show");

//     target.style.backgroundColor = isCompareOption ? "#8e8b8b" : "#e0e0e0";

//     showWrapper4.scrollIntoView({
//         behavior: "smooth"
//     });
// });

// comparedAuctionPhotoLeftLink.addEventListener("click", function(evt) {
//     openCarousel(0);
// });

// firstcomparedAuctionPhotoSetPhoto.addEventListener("click", function(evt) {
//     openCarousel(1);
// });

// comparedAuctionPhotoSetPhotos[0].addEventListener("click", function(evt) {
//     openCarousel(2);
// });

// comparedAuctionPhotoSetPhotos[1].addEventListener("click", function(evt) {
//     openCarousel(3);
// });

// comparedAuctionPhotoSetPhotos[2].addEventListener("click", function(evt) {
//     openCarousel(4);
// });

// comparedAuctionPhotoSetPhotos[3].addEventListener("click", function(evt) {
//     openCarousel(5);
// });

// comparedAuctionPhotoRightLink.addEventListener("click", function(evt) {
//     window.open("https://www.sauto.cz/osobni/detail/skoda/octavia/207428415", "_blank");
// });

mobileMenu();
openingDays();
setCarouselSlide();