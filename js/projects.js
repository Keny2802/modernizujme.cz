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
    const newProjectIndex = projectIndex + 1;

    projectLink.href = `https://modernizujme.cz/${newProjectIndex}/index.html`;
    
    if (newProjectIndex === 5) {
        projectLink.href = "https://freyova.cz";
    };
    
    projectLink.classList.add(...projectLinkSET);
    projectLink.textContent = "Zobrazit projekt";

    for (const key in projectLinkATTRS) {
        projectLink.setAttribute(key, projectLinkATTRS[key]);
    };

    project.appendChild(projectLink);
});