const sections = document.querySelectorAll(".section");
const brandHeader = document.querySelector(".brand-header")
const header = document.querySelector(".main-header");
const navLinks = document.querySelectorAll(".main-header-link");
const mobileMenuContainer = document.querySelector(".mobile-menu-header");
const closeHeader = document.querySelector(".mobile-menu-header .icon");
const mobileNavLinks = document.querySelectorAll(".mobile-menu-link");
const mainSection = document.getElementById("main-sect");
const filterHit = document.querySelector(".filter-heading");
const sidePanel = document.querySelector(".side-panel");
const locationOptionContainer = document.querySelector(".location-options");
const locationOptions = locationOptionContainer.querySelectorAll(".location-option");
const details = document.querySelectorAll("details");
const locationField = document.querySelector(".location-field");
const auctionsResults = document.querySelector(".auctions-results");
const cancelCheckmarks = document.querySelector(".cancel-checkmarks");
const hideLocationOptions = document.querySelector(".hide-location-options");
const resetOptions = document.querySelector(".reset-options-n-options");
const resetPriceFields = document.querySelector(".reset-prices-fields");
const priceFields = document.querySelectorAll(".price-field");
const auctionsContainer = document.querySelector(".auctions-container-wrapper");
const auctions = document.querySelectorAll(".auction");
const auctionHeading = document.querySelectorAll(".auction-heading");
const auctionInfoPoint = document.querySelectorAll(".auction-section");
const searchHit = document.querySelector(".main-tools .tool");
const hitLoadMoreAuctions = document.querySelector(".hit-load-more");
const showMoreContainerLink = document.querySelector(".show-more-container-link");
const showMoreItems = document.querySelector(".show-more-items");

const body = document.body;

let isFilter = false;
let isScrolled = false;
let isMobileMenu = false;
let currentSect = "main-sect";
let currentAuctionIndex = 0;
let auctionsDATAArr = [];
let auctionsLeft = 0;
let isMouseLeaveActive = false;

function mobileMenu() {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");

    mobileMenuIcon.addEventListener("click", function(evt) {
        isMobileMenu = !isMobileMenu;
        mobileMenuContainer.classList.add("show");
    });
};

function currentSectionLink() {
    window.addEventListener("scroll", function(evt) {
        sections.forEach((sectionEl) => {
            if (window.scrollY >= sectionEl.offsetTop) {
                currentSect = sectionEl.id;
            };
        });

        navLinks.forEach((navLinkEl) => {
            if (navLinkEl.href.includes(currentSect)) {
                document.querySelector(".active-link").classList.remove("active-link");
                navLinkEl.classList.add("active-link");
            };
        });
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

function searchAuctionLocation() {
    locationField.addEventListener("click", function(evt) {
        locationOptionContainer.style.display = "block";
    });

    locationField.addEventListener("input", function(evt) {
        const locationFieldValue = evt.target.value.toLowerCase().trim();

        locationOptions.forEach((locationOption, locationOptionIndex) => {
            const locationOptionCheck = locationOption.querySelector(".location-option-check");
            const locationOptionContent = locationOption.textContent.toLowerCase().trim();

        if (locationOptionContent.includes(locationFieldValue)) {
            locationOption.style.display = "block";

            auctions.forEach((auction, auctionIndex) => {
                const auctionHeadline = auction.querySelector(".info-point-heading-county");
                if (auctionHeadline.textContent.toLowerCase().trim().includes(locationFieldValue)) {
                    auction.style.display = "block";
                } else {
                    auction.style.display = "none";
                };
            });
        } else {
            locationOption.style.display = "none";
        };
        });
    });
    updateOverflow();

    locationOptions.forEach((locationOption, locationOptionIndex) => {
        const locationOptionCheck = locationOption.querySelector(".location-option-check");

        locationOption.addEventListener("click", function(evt) {
            toggleCheck(locationOption, locationOptionCheck);
        });

        locationOptionCheck.addEventListener("click", function(evt) {
            toggleCheck(locationOption, locationOptionCheck);
        });

        locationOptionCheck.checked = false;
    });
};

function toggleCheck(locationOption, locationOptionCheck) {
    locationOptionCheck.checked = !locationOptionCheck.checked;

    if (locationOptionCheck.checked) {
        locationOption.style.backgroundColor = "#e0e0e0";
        locationOption.style.borderBottom = "1px solid #a1a1a1";
    } else {
        locationOption.style.backgroundColor = "";
        locationOption.style.borderBottom = "";
    };

    updateAuctionVisibility();
};

function updateAuctionVisibility() {
    auctions.forEach((auction) => {
        const auctionHeadline = auction.querySelector(".info-point-heading-county");
        const auctionText = auctionHeadline.textContent.toLowerCase().trim();

        const shouldBeVisible = Array.from(locationOptions).some((locationOption) => {
            const locationOptionCheck = locationOption.querySelector(".location-option-check");
            const locationOptionContent = locationOption.querySelector(".location-option-content[data-county]");
            const locationOptionCounty = locationOptionContent?.dataset.county.toLowerCase().trim();
            return locationOptionCheck.checked && auctionText.includes(locationOptionCounty);
        });

        auction.style.display = shouldBeVisible ? "block" : "none";
    });
};

function updateOverflow() {
    const visibleOptions = document.querySelectorAll(".location-options .location-option:not([style*='display: none'])");

    if (visibleOptions.length >= 1 && visibleOptions.length <= 4 || visibleOptions.length === 0) {
        locationOptionContainer.style.overflowY = "hidden";
    } else {
        locationOptionContainer.style.overflowY = "scroll";
    };
};

function searchAuctionByKeyWord() {
    const thingSearcher = document.querySelector(".thing-field");

    thingSearcher.addEventListener("input", function(evt) {
        const target = evt.target;
        const value = target.value.trim().toLowerCase();

        auctions.forEach((auction, auctionIndex) => {
            const auctionHeading = auction.querySelector(".auction-heading");
            const termstring = auctionHeading.dataset.auctionSearchTerm || "";
            const terms = termstring.split(", ").map(term => term.trim().toLowerCase());
            const matches = terms.some(term => term.includes(value))

            if (value === "" || matches) {
                auction.style.display = "block";
            } else {
                auction.style.display = "none";
            };
        });
    });
};

function cancelMarks() {
    cancelCheckmarks.addEventListener("click", function(evt) {
        let isChecked = false;

        locationOptions.forEach((locationOption, locationOptionIndex) => {
            const locationOptionCheck = locationOption.querySelector(".location-option-check");

            if (locationOptionCheck.checked) {
                isChecked = true;
                locationOptionCheck.checked = false;
                locationOption.style.backgroundColor = "";
                locationOption.style.borderBottom = "";
                locationOption.dataset.originalIndex = locationOptionIndex + 1;
                restoreCheckedAuctionsPos(locationOption);
                locationField.focus();
            };
        });
    });
};

function hideLocOptions() {
    hideLocationOptions.addEventListener("click", function(evt) {
        locationOptionContainer.style.display = "none";
        locationField.focus();
    });
};

function resetOptionsNAuctions() {
    resetOptions.addEventListener("click", function(evt) {
        let isChecked = false;

        locationOptions.forEach((locationOption) => {
            const locationOptionCheck = locationOption.querySelector(".location-option-check");

            if (locationOptionCheck.checked) {
                isChecked = true;
                locationOptionCheck.checked = false;
                locationOption.style.backgroundColor = "";
                locationOption.style.borderBottom = "";

                auctions.forEach((auction) => {
                    auction.style.display = "block";
                });

                restoreCheckedAuctionsPos(locationOption);
            } else if (!locationOptionCheck.checked) {
                auctions.forEach((auction) => {
                    auction.style.display = "block";
                });
            };
        });
    });
};

function currentAuctionSection() {
    auctionHeading.forEach((heading) => {
        const headingSection = heading.dataset.auctionSection.toLowerCase();
        
        auctionInfoPoint.forEach((infoPoint) => {
            if (headingSection && infoPoint.textContent.toLowerCase().trim().includes(headingSection)) {
                infoPoint.style.fontWeight = "700";
                infoPoint.style.color = "#ff0000";
            };
        })
    });
};

function howManyAuctionsByCounty() {
    const auctionCounts = {};

    // const auctions = document.querySelectorAll(".auction");

    auctions.forEach((auction) => {
        const auctionHeadline = auction.querySelector(".info-point-heading-county");
        const county = auctionHeadline.textContent.toLowerCase().trim();

        auctionCounts[county] = (auctionCounts[county] || 0) + 1;
    });

    locationOptions.forEach((locationOption) => {
        const locationOptionContent = locationOption.querySelector(".location-option-content");
        const countyName = locationOptionContent.textContent.toLowerCase().trim();

        const count = auctionCounts[countyName] || 0;

        if (count === 1) {
            locationOptionContent.innerHTML =
            `${firstLetterCountyName(countyName)} (<span class="count-county-name">${count}</span>) <span class="auction-key">Dražba</span>`;
        } else if (count > 1 && count <= 2) {
            locationOptionContent.innerHTML =
            `${firstLetterCountyName(countyName)} (<span class="count-county-name">${count}</span>) <span class="auction-key">Dražby</span>`;
        } else if (count > 2 && count <= 4) {
            locationOptionContent.innerHTML =
            `${firstLetterCountyName(countyName)} (<span class="count-county-name">${count}</span>) <span class="auction-key">Dražby</span>`;
        } else if (count > 4) {
            locationOptionContent.innerHTML =
            `${firstLetterCountyName(countyName)} (<span class="count-county-name">${count}</span>) <span class="auction-key">Dražeb</span>`;
        } else {
            locationOptionContent.textContent = firstLetterCountyName(countyName);
        };
    });
};

function firstLetterCountyName(string) {
    return string
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

function auctionPrices() {
    const headings = document.querySelectorAll(".info-point-heading-price");

    headings.forEach((priceHeadline) => {
        let priceHeadlineTextContent = priceHeadline.textContent.trim();
        let priceHeadlineTextNumber = priceHeadlineTextContent.replace(/\./g, "").replace(/\s*Kč/, "");

        priceHeadline.textContent = priceHeadlineTextNumber;
    });
};

function numberForamttedWriting() {
    priceFields.forEach((priceField) => {
        priceField.addEventListener("input", function(evt) {
            let cursorPosition = evt.target.selectionStart;
            let priceFieldValue = evt.target.value.replace(/\./g, "");

            if (!priceFieldValue) return;

            priceFieldValue = Number(priceFieldValue).toLocaleString("cs-CZ");

            evt.target.value = priceFieldValue;

            evt.target.setSelectionRange(cursorPosition, cursorPosition);
        });
    });
};

function getCheckedAuctionAsFirst() {
    locationOptions.forEach((locationOption, locationOptionIndex) => {
        const locationOptionCheck = locationOption.querySelector(".location-option-check");
        locationOption.dataset.originalIndex = locationOptionIndex + 1;

        locationOption.addEventListener("click", function(e) {
            isScrolled = !isScrolled;
            const target = e.target;

            if (locationOptionCheck.checked) {
                locationOption.parentNode.prepend(locationOption);
                
                locationOption.scrollIntoView({
                    behavior: "smooth"
                });

            } else {
                restoreCheckedAuctionsPos(locationOption);
            };
        });
    });
};

function restoreCheckedAuctionsPos(el) {
    const parent = el.parentNode;
    const originalIndex = parseInt(el.dataset.originalIndex, 10);

    const children = Array.from(parent.children);
    const referenceNode = children[originalIndex] || null;

    parent.insertBefore(el, referenceNode);
};

function getLocationOptionTextToCenter() {
    locationOptions.forEach((locationOption) => {
        if (locationOption.textContent.trim().includes("Dražba")
        ||
        locationOption.textContent.trim().includes("Dražby")
        ||
        locationOption.textContent.trim().includes("Dražeb")) {
            locationOption.style.textAlign = "center";
        };
    });
};

function filterAuctionsByPrice() {
    const priceFrom = parseInt(priceFields[0].value.replace(/\s/g, ""), 10);
    const priceTo = parseInt(priceFields[1].value.replace(/\s/g, ""), 10);

    auctions.forEach((auction) => {
        const auctionPrice = auction.querySelector(".info-point-heading-price").textContent;
        const price = parseInt(auctionPrice.replace(/\D/g, ""), 10);

        let show = true;

        if (!isNaN(priceFrom) && price < priceFrom) {
            show = false;
        };

        if (!isNaN(priceTo) && price > priceTo) {
            show = false;
        };

        auction.style.display = show ? "block" : "none";
    });
};

function auctionFilters() {
    const thingSearcher = document.querySelector(".thing-field");
    const priceFields = document.querySelectorAll(".price-field");
    let auctionsResults = document.querySelector(".auctions-results-by-filter");

    function filterAuctions() {
        const searchValue = thingSearcher.value.trim().toLowerCase();
        const priceFrom = parseInt(priceFields[0].value.replace(/\s/g, ""), 10);
        const priceTO = parseInt(priceFields[1].value.replace(/\s/g, ""), 10);

        let anyVisible = false;

        auctions.forEach((auction, auctionIndex) => {
            const auctionHeading = auction.querySelector(".auction-heading");
            const termsString = auctionHeading.dataset.auctionSearchTerm || "";
            const terms = termsString.split(", ").map(term => term.trim().toLowerCase())
            const matchesSearch = searchValue === "" || terms.some(term => term.includes(searchValue));

            const priceText = auction.querySelector(".info-point-heading-price").textContent;
            const auctionPrice = parseInt(priceText.replace(/\D/g, ""), 10);
            let matchesPrice = true;
            
            if (!isNaN(priceFrom) && auctionPrice < priceFrom) {
                matchesPrice = false;
            };

            if (!isNaN(priceTO) && auctionPrice > priceTO) {
                matchesPrice = false;
            };

            const visible = matchesSearch && matchesPrice;
            auction.style.display = visible ? "block" : "none";

            if (visible) anyVisible = true;
        });

        auctionsResults.style = anyVisible ? "none" : "block";
    };

    function debounce(fn, delay) {
        let timeout;

        return function (...args) {
            clearTimeout(timeout);

            timeout = setTimeout(() => {
                fn.apply(this, args);
            }, delay)
        };
    };

    const debouncedFilter = debounce(filterAuctions, 250);

    thingSearcher.addEventListener("input", debouncedFilter);
    priceFields.forEach((field) => {
        field.addEventListener("input", debouncedFilter);
    });
};

// async function loadMoreContentAuctions() {
//     const response = await fetch("auctions.json");
//     const auctionsDATA = await response.json();
    
//     const auctionsContainer = document.querySelector(".auctions-container-wrapper");

//     auctionsDATA.forEach((auction) => {
//         const auctionEL = document.createElement("div");
//         auctionEL.classList.add("auction");

//         auctionEL.innerHTML = `
//             <div class="auction-wrapper">
//                 <div class="auction-photo-container">
//                     <img
//                     src="${auction.auction_photo_source}"
//                     loading="lazy"
//                     fetchpriority="high"
//                     decoding="async"
//                     class="auction-photo">
//                     <p class="auction-status">
//                         ${auction.auction_status}
//                     </p>
//                 </div>
//                 <div class="auction-text-content">
//                     <h3
//                     class="auction-heading"
//                     title="${auction.auction_title}"
//                     data-auction-section="${auction.auction_data_section}"
//                     data-auction-search-term="${auction.auction_data_search_term}">
//                         ${auction.auction_title}
//                     </h3>

//                     <ul class="info-points">
//                         <li class="info-point">
//                             <strong class="info-point-heading">
//                                 Místo
//                             </strong>
//                             ${auction.auction_place}
//                         </li>
//                         <li class="info-point">
//                             <strong class="info-point-heading">
//                                 Okres
//                             </strong>
//                             <span class="info-point-heading-county" data-county="${auction.auction_county}">
//                                 ${auction.auction_county}
//                             </span>
//                         </li>
//                         <li class="info-point">
//                             <strong class="info-point-heading">
//                                 Zahájení
//                             </strong>
//                             ${auction.auction_beginning}
//                         </li>
//                         <li class="info-point">
//                             <strong class="info-point-heading">
//                                 Sekce
//                             </strong>
//                             <span class="auction-section">
//                                 ${auction.auction_one_section_1}
//                             </span>
//                             <span class="auction-section">
//                                 ${auction.auction_one_section_2}
//                             </span>
//                             <span class="auction-section">
//                                 ${auction.auction_one_section_3}
//                             </span>
//                         </li>
//                         <li class="info-point">
//                             <strong
//                             class="info-point-heading info-point-heading-price"
//                             data-price-desc="${auction.auction_data_desc}">
//                                 ${auction.auction_price}
//                             </strong>
//                             nejnižší podání
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         `;

//         auctionsContainer.appendChild(auctionEL);
//     });

//     howManyAuctionsByCounty();
// };

async function loadMoreContentAuctions() {
    if (auctionsDATAArr.length === 0) {
        const response = await fetch("auctions.json");
        auctionsDATAArr = await response.json();
    };

    if (currentAuctionIndex >= auctionsDATAArr.length) {
        hitLoadMoreAuctions.style.display = "none";
        return;
    };
    
    const auction = auctionsDATAArr[currentAuctionIndex];
    const auctionsContainer = document.querySelector(".auctions-container-wrapper");
    const auctionEL = document.createElement("div");
    auctionEL.classList.add("auction");

    auctionEL.innerHTML = `
            <div class="auction-wrapper">
                <div class="auction-photo-container">
                    <img
                    src="${auction.auction_photo_source}"
                    loading="lazy"
                    decoding="async"
                    class="auction-photo">
                    <p class="auction-status">
                        ${auction.auction_status}
                    </p>
                    <span class="auction-section-label ${auction.auction_section_label_class}">
                        ${auction.auction_section_label}
                    </span>
                    <button class="put-as-favorite" aria-label="Přidat do oblíbených">
                        🤍
                    </button>
                </div>
                <div class="auction-text-content">
                    <h3
                    class="auction-heading"
                    title="${auction.auction_title}"
                    data-auction-section="${auction.auction_data_section}"
                    data-auction-search-term="${auction.auction_data_search_term}">
                        ${auction.auction_title}
                    </h3>

                    <ul class="info-points">
                        <li class="info-point">
                            <strong class="info-point-heading">
                                Exekutor
                            </strong>
                            ${auction.auction_executor}
                        </li>
                        <li class="info-point">
                            <strong class="info-point-heading">
                                Místo
                            </strong>
                            ${auction.auction_place}
                        </li>
                        <li class="info-point">
                            <strong class="info-point-heading">
                                Okres
                            </strong>
                            <span class="info-point-heading-county" data-county="${auction.auction_county}">
                                ${auction.auction_county}
                            </span>
                        </li>
                        <li class="info-point">
                            <strong class="info-point-heading">
                                Zahájení
                            </strong>
                            ${auction.auction_beginning}
                            <span class="different-color-text">
                                ${auction.auction_for_how_many_days_beginning}
                            </span>
                        </li>
                        <li class="info-point">
                            <strong class="info-point-heading">
                                Sekce
                            </strong>
                            <span class="auction-section">
                                ${auction.auction_one_section_1}
                            </span>
                            <span class="auction-section">
                                ${auction.auction_one_section_2 || ""} 
                            </span>
                            <span class="auction-section">
                                ${auction.auction_one_section_3  || ""}
                            </span>
                        </li>
                        <li class="info-point">
                            <strong
                            class="info-point-heading info-point-heading-price"
                            data-price-desc="${auction.auction_data_desc}">
                                ${auction.auction_price}
                            </strong>
                            nejnižší podání
                        </li>
                    </ul>
                </div>
            </div>
            <div class="auction-link-container">
                <a href="auctions/${auction.auction_link_path}" target="_blank" class="auction-link">
                    Mrknout na dražbu
                </a>
            </div>
    `;

    auctionsContainer.appendChild(auctionEL);
    currentAuctionIndex++;
    howManyAuctionsByCounty();

    if (currentAuctionIndex >= auctionsDATAArr.length) {
        hitLoadMoreAuctions.style.display = "none";
    };
};

async function howManyLoadedAuctions(element) {
    const response = await fetch("auctions.json");
    const auctionsDATA = await response.json();

    auctionsLeft = auctionsDATA.length;
    element.innerHTML += `(<span class="how-many-auctions">${auctionsDATA.length}</span>)`;
};

function customLinks() {
    const mainHeaderLink = document.querySelectorAll(".main-header-link");

    mainHeaderLink.forEach((link) => {
        link.addEventListener("click", function(evt) {
            evt.preventDefault();

            const targetLinkID = this.getAttribute("href").substring(1);
            const targetLink = document.getElementById(targetLinkID);

            if (targetLink) {
                targetLink.scrollIntoView({
                    behavior: "smooth"
                });
            }; 
        });
    });
};

document.addEventListener("DOMContentLoaded", function(evt) {
    const secondaryNavbarHeight = document.querySelector(".brand-header").offsetHeight;
    const primaryNavbar = document.querySelector(".main-header");
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");

    window.addEventListener("scroll", function(evt) {
        if (window.scrollY > secondaryNavbarHeight) {
            primaryNavbar.classList.add("fixed-main-header");
        } else {
            primaryNavbar.classList.remove("fixed-main-header");
        };
    });
});

document.addEventListener("DOMContentLoaded", function() {
    locationOptionContainer.addEventListener("wheel", function(evt) {
        if (locationOptionContainer.scrollHeight > locationOptionContainer.clientHeight) {
            const atTop = locationOptionContainer.scrollTop === 0;
            const atBottom = locationOptionContainer.scrollTop + locationOptionContainer.clientHeight >= locationOptionContainer.scrollHeight;

            if ((atTop && evt.deltaY < 0) || (atBottom && evt.deltaY > 0)) {
                evt.preventDefault();
            };
        };
    }, { passive: false });
});

showMoreContainerLink.addEventListener("mouseenter", function(evt) {
    showMoreItems.style.display = "block";
});

showMoreItems.addEventListener("mouseleave", function(evt) {
    showMoreItems.style.display = "none";
});

window.addEventListener("scroll", function(evt) {
    if (window.scrollY > 0) {
        header.classList.add("change-top");
    } else {
        header.classList.remove("change-top");
    };
});

mobileNavLinks.forEach((mobileHeaderLink) => {
    mobileHeaderLink.addEventListener("click", function(evt) {
        evt.preventDefault();

        const targetLinkID = evt.target.getAttribute("href").substring(1);
        const targetLink = document.getElementById(targetLinkID);

        if (targetLink) {
            targetLink.scrollIntoView({
                behavior: "smooth"
            });
        };

        mobileMenuContainer.classList.remove("show");
    });
});

details.forEach((detail) => {
    detail.addEventListener("click", function(evt) {
        details.forEach((otherDetail) => {
            if (otherDetail !== detail) {
                otherDetail.removeAttribute("open");
            };
        });
    });
});

auctions.forEach((auction) => {
    const auctionPhoto = auction.querySelector(".auction-photo");
    const auctionLink = auction.querySelector(".auction-link");
    const auctionLinkPath = auctionLink.href;

    auctionPhoto.addEventListener("click", function(evt) {
        window.open(auctionLinkPath, "_blank");
    });
});

closeHeader.addEventListener("click", function(evt) {
    mobileMenuContainer.classList.remove("show");
});

priceFields.forEach((priceField) => {
    priceField.addEventListener("input", function(evt) {
        filterAuctionsByPrice();
    });
});

resetPriceFields.addEventListener("click", function(evt) {
    auctions.forEach((auction) => {
        auction.style.display = "block";
    });

    priceFields.forEach((priceField) => {
        if (priceField.value) {
            priceField.value = "";
        };
    });
});

filterHit.addEventListener("click", function(evt) {
    isFilter = !isFilter;
    const svg = filterHit.querySelector(".filter-svg");
    svg.style.color = isFilter ? "#efba1b": "#ffffff";
    sidePanel.style.display = isFilter ? "block" : "none";

    const filterHeadline = document.querySelector(".side-panel .heading");

    filterHeadline.scrollIntoView({
        behavior: "smooth"
    });
});

auctionsContainer.addEventListener("click", function(evt) {
    const target = evt.target;

    if (target.classList.contains("put-as-favorite")) {
        if (target.textContent === "🤍") {
            target.textContent = "❤️";
            target.setAttribute("title", "Odebrat z oblíbených");
            target.setAttribute("aria-label", "Odebrat z oblíbených");
        } else {
            target.textContent = "🤍";
            target.setAttribute("title", "Přidat do oblíbených");
            target.setAttribute("aria-label", "Přidat do oblíbených");
        };
    };
});

hitLoadMoreAuctions.addEventListener("click", function(evt) {
    const howManyAuctionsEL = document.querySelector(".how-many-auctions");
    const target = evt.target;

    loadMoreContentAuctions();
    auctionsLeft--;
    
    if (howManyAuctionsEL) {
        if (auctionsLeft > 0) {
            howManyAuctionsEL.textContent = auctionsLeft;
        } else {
            howManyAuctionsEL.remove();
        };
    };
});

mobileMenu();
currentSectionLink();
searchAuctionLocation();
searchAuctionByKeyWord();
cancelMarks();
hideLocOptions();
resetOptionsNAuctions();
currentAuctionSection();
howManyAuctionsByCounty();
auctionFilters();
getCheckedAuctionAsFirst();
filterAuctionsByPrice();
customLinks();
openingDays();
howManyLoadedAuctions(hitLoadMoreAuctions);