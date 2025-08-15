const typingEffectHeadline = document.getElementById("about-typing-text");
let charIndex = 0;
let lineIndex = 0;
let isDeleting = false;
let typingInterval;
let isTypingActive = false;

const typingPhrases = [
    "Web Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Software Creator"

    // "Web Developer →",
    // "Moderní weby →",
    // "Fokus na uživatele →",
    // "Interaktivní aplikace →",
    // "Minimalistický design",
];

function typingEffect() {
    if (!isTypingActive) return;

    const currentLine = typingPhrases[lineIndex];
    const visibleText = currentLine.substring(0, charIndex);

    typingEffectHeadline.textContent = visibleText + (charIndex % 2 === 0 ? "|" : "");

    let typingEffectDelay = 60;

    if (!isDeleting) {
        if (charIndex < currentLine.length) {
            charIndex++;
        } else {
            typingEffectDelay = 1500;
            isDeleting = true;
        };
    } else {
        if (charIndex > 0) {
            charIndex--;
            typingEffectDelay = 40;
        } else {
            isDeleting = false;
            lineIndex = (lineIndex + 1) % typingPhrases.length;
            typingEffectDelay = 200;
        };
    };

    typingInterval = setTimeout(typingEffect, typingEffectDelay);
};

const obServer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (!isTypingActive) {
                isTypingActive = true;
                typingEffect();
            };
        } else {
            if (isTypingActive) {
                isTypingActive = false;
                clearTimeout(typingInterval);
            };
        };
    });
}, { threshold: 0.5 });

obServer.observe(typingEffectHeadline);
// typingEffect();