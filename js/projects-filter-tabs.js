const sectProjects = document.querySelectorAll(".project");
const projectFilterTabs = document.querySelectorAll(".filter-tab");

projectFilterTabs.forEach((projectFilterTab) => {
    projectFilterTab.addEventListener("click", function(evt) {
        projectFilterTabs.forEach((tab) => tab.classList.replace("bg-yellow-400", "bg-gray-700"));
        projectFilterTabs.forEach((tab) => tab.classList.replace("text-gray-700", "text-white"));

        projectFilterTab.classList.replace("bg-gray-700", "bg-yellow-400");
        projectFilterTab.classList.replace("text-white", "text-gray-700");

        const filterTabTEXT = projectFilterTab.dataset.tabBtnFilter;

        sectProjects.forEach((project) => {
            if (filterTabTEXT === "all" || project.dataset.filterTabBtnCategory === filterTabTEXT) {
                project.classList.remove("hidden");
            } else {
                project.classList.add("hidden");
            };
        });
    });
});