const sectionMainHeadingHashes = document.querySelectorAll(".section-main-heading-hash");
const scrollSectBTN = document.getElementById("scroll-sect-btn");

scrollSectBTN.dataset.target = "hero";

sectionMainHeadingHashes.forEach((sectionMainHeadingHash) => {
    const targetID = sectionMainHeadingHash.dataset.target;
    
    sectionMainHeadingHash.addEventListener("click", function(evt) {
        evt.preventDefault();
        const target = evt.target;
        
        sectionMainHeadingHashes.forEach((el) => {
            el.classList.remove("opacity-100");
            el.classList.add("opacity-0");
        });

        sectionMainHeadingHash.classList.remove("opacity-0");
        sectionMainHeadingHash.classList.add("opacity-100");
        
        scrollSectBTN.dataset.target = targetID;
    });
});

scrollSectBTN.addEventListener("click", function(evt) {
    evt.preventDefault();

    const targetID = scrollSectBTN.dataset.target || "hero";
    const targetLink = document.getElementById(targetID);

    if (targetLink) {
        targetLink.scrollIntoView({
            behavior: "smooth"
        });
    };
});