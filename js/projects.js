const projects = document.querySelectorAll(".project");

const projectLinkSET = [
    "inline-block",
    "pb-8",
    "pl-7",
    "text-yellow-500",
    "font-medium",
    "project-main-cta-link",
    "section-box-main-cta-link"
];
const projectLinkATTRS = {
    target: "_blank",
    rel: "noopener noreferrer"
};

projects.forEach((project, projectIndex) => {
    const projectLink = document.createElement("a");

    projectLink.href = `https://modernizujme.cz/${projectIndex + 1}/index.html`;
    projectLink.classList.add(...projectLinkSET);
    projectLink.textContent = "Zobrazit projekt";

    for (const key in projectLinkATTRS) {
        projectLink.setAttribute(key, projectLinkATTRS[key]);
    };

    project.appendChild(projectLink);
});