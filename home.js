const mobileMenuContainer = document.querySelector(".mobile-menu-header");
const closeHeader = document.querySelector(".mobile-menu-header .icon");
const mobileNavLinks = document.querySelectorAll(".mobile-menu-link");
const locationOptionContainer = document.querySelector(".location-options");
const locationOptions = locationOptionContainer.querySelectorAll(".location-option");
const locationField = document.querySelector(".location-field");
const auctionsResults = document.querySelector(".auctions-results");
const cancelCheckmarks = document.querySelector(".cancel-checkmarks");
const hideLocationOptions = document.querySelector(".hide-location-options");
const resetOptions = document.querySelector(".reset-options-n-options");
const resetPriceFields = document.querySelector(".reset-prices-fields");
const priceFields = document.querySelectorAll(".price-field");
const auctions = document.querySelectorAll(".auction");
const auctionHeading = document.querySelectorAll(".auction-heading");
const auctionInfoPoint = document.querySelectorAll(".auction-section");

function mobileMenu() {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");

    mobileMenuIcon.addEventListener("click", function(evt) {
        mobileMenuContainer.classList.add("show");
    });
};

closeHeader.addEventListener("click", function(evt) {
    mobileMenuContainer.classList.remove("show");
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
    // const day = days[fakeDate.getDay()].toLowerCase();

    const day = days[new Date().getDay()].toLowerCase();
    const dayEls = document.querySelectorAll(".day");

    dayEls.forEach((dayEl) => {
        if (dayEl.textContent.toLowerCase().includes(day)) {
            dayEl.style.padding = "4px";
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
        // evt.preventDefault();
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
                        // auction.lastElementChild.scrollIntoView({
                        //     behavior: "smooth"
                        // });
                    } else {
                        auction.style.display = "none";
                    };

                    // const locationOptionCheckTextContent = auctionHeadline.textContent.toLowerCase().trim().includes(locationOptionCheck.textContent.trim().toLowerCase());

                    // if (locationOptionCheck.checked && locationOptionCheckTextContent) {
                    //     auction.style.display = "block";
                    // } else {
                    //     auction.style.display = "none";
                    // };
                });
            } else {
                locationOption.style.display = "none";
            };
        });

        // const visibleOptions = document.querySelectorAll(".location-options .location-option:not([style*='display: none'])");

        // if (visibleOptions.length >= 1 && visibleOptions.length <= 4 || visibleOptions.length === 0) {
        //     locationOptionContainer.style.overflowY = "hidden";
        // } else {
        //     locationOptionContainer.style.overflowY = "scroll";
        // };
        // updateAuctionVisibility();
        updateOverflow();
    });

    locationOptions.forEach((locationOption, locationOptionIndex) => {
        const locationOptionCheck = locationOption.querySelector(".location-option-check");

        locationOption.addEventListener("click", function(evt) {
            // if (locationOptionCheck.checked) {
            //     locationOptionCheck.checked = false;
            //     locationOption.style.backgroundColor = "";
            //     locationOption.style.borderBottom = "";
            // } else {
            //     locationOptionCheck.checked = true;
            //     locationOption.style.backgroundColor = "#e0e0e0";
            //     locationOption.style.borderBottom = "1px solid #a1a1a1";
            // };
            toggleCheck(locationOption, locationOptionCheck);
        });

        locationOptionCheck.addEventListener("click", function(evt) {
            // if (locationOptionCheck.checked) {
            //     locationOptionCheck.checked = false;
            //     locationOption.style.backgroundColor = "";
            //     locationOption.style.borderBottom = "";
            // } else {
            //     locationOptionCheck.checked = true;
            //     locationOption.style.backgroundColor = "#e0e0e0";
            //     locationOption.style.borderBottom = "1px solid #a1a1a1";
            // };
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
    // locationField.focus();

    cancelCheckmarks.addEventListener("click", function(evt) {
        let isChecked = false;

        locationOptions.forEach((locationOption) => {
            const locationOptionCheck = locationOption.querySelector(".location-option-check");

            // cancelCheckmarks.disabled = false;

            if (locationOptionCheck.checked) {
                isChecked = true;
                locationOptionCheck.checked = false;
                locationOption.style.backgroundColor = "";
                locationOption.style.borderBottom = "";
                locationField.focus();
            } else {
                cancelCheckmarks.disabled = true;
            };
        });

        cancelCheckmarks.disabled = !isChecked;
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
            // else resetOptions.disabled = true;
        })

        // resetOptions.disabled = !isChecked;
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

    auctions.forEach((auction) => {
        const auctionHeadline = auction.querySelector(".info-point-heading-county");
        const county = auctionHeadline.textContent.toLowerCase().trim();

        auctionCounts[county] = (auctionCounts[county] || 0) + 1;
    });

    locationOptions.forEach((locationOption) => {
        const locationOptionContent = locationOption.querySelector(".location-option-content");
        // const locationCountContent = document.createElement("span");
        const countyName = locationOptionContent.textContent.toLowerCase().trim();
        // locationOptionContent.appendChild(locationCountContent);

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
    // return string.charAt(0).toUpperCase() + string.slice(1);

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

// function getAuctionResults() {
//     let total = 0;

//     locationOptions.forEach((locationOption) => {
//         const locationOptionCheck = locationOption.querySelector(".location-option-check");
//         const countCountyName = locationOption.querySelector(".count-county-name");

//         if (locationOptionCheck.checked && countCountyName) {
//             const countText = countCountyName.textContent.trim();
//             const countNumber = parseInt(countText, 10);

//             if (!isNaN(countNumber)) {
//                 total += countNumber;
//             };
//         };
//     });

//     auctionsResults.textContent = total > 0 ? `Výsledky: ${total}` : "Výsledky: 0";
// };

// locationOptions.forEach((locationOption) => {
//     const locationOptionCheck = locationOption.querySelector(".location-option-check");

//     if (locationOptionCheck) {
//         locationOptionCheck.addEventListener("change", getAuctionResults);
//     };
// });

function getCheckedAuctionAsFirst() {
    locationOptions.forEach((locationOption, locationOptionIndex) => {
        const locationOptionCheck = locationOption.querySelector(".location-option-check");
        locationOption.dataset.originalIndex = locationOptionIndex + 1;

        locationOption.addEventListener("click", function(e) {
            const target = e.target;

            // locationOptionCheck.checked
            // target.firstElementChild.checked
            if (locationOptionCheck.checked) {
                locationOption.parentNode.prepend(locationOption);
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

            const priceText = auction.querySelector("..info-point-heading-price").textContent;
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

const details = document.querySelectorAll("details");

details.forEach((detail) => {
    detail.addEventListener("click", function(evt) {
        details.forEach((otherDetail) => {
            if (otherDetail !== detail) {
                otherDetail.removeAttribute("open");
            };
        });
    });
});

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

mobileMenu();
searchAuctionLocation();
searchAuctionByKeyWord();
cancelMarks();
hideLocOptions();
resetOptionsNAuctions();
currentAuctionSection();
howManyAuctionsByCounty();
auctionFilters();
// auctionPrices();
// showTextBlocks();
// numberForamttedWriting();
// getAuctionResults();
// getCheckedLocationToFirstPos();
getCheckedAuctionAsFirst();
getLocationOptionTextToCenter();
filterAuctionsByPrice();
customLinks();
openingDays();

document.addEventListener("DOMContentLoaded", function(evt) {
    const secondaryNavbarHeight = document.querySelector(".brand-header").offsetHeight;
    const primaryNavbar = document.querySelector(".main-header");
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");

    window.addEventListener("scroll", function(evt) {
        if (window.scrollY > secondaryNavbarHeight) {
            primaryNavbar.classList.add("fixed-main-header");
            // mobileMenuIcon.style.visibility = "visible";
        } else {
            primaryNavbar.classList.remove("fixed-main-header");
            // mobileMenuIcon.style.visibility = "hidden";
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