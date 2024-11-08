// Load interactive features when the DOM content is ready
document.addEventListener("DOMContentLoaded", () => {
    enableSectionToggle();
    activateSkillTooltips();
});

// Toggle the visibility of resume sections with smooth animations
function enableSectionToggle(): void {
    const sectionTitles = document.querySelectorAll("main h2");

    sectionTitles.forEach(title => {
        title.addEventListener("click", () => {
            const content = title.nextElementSibling as HTMLElement;
            if (content) {
                content.style.transition = "max-height 0.4s ease";
                content.style.overflow = "hidden";
                content.style.maxHeight = content.style.maxHeight ? "" : `${content.scrollHeight}px`;
            }
        });
    });
}

// Display informative tooltips for each skill in the Skills section
function activateSkillTooltips(): void {
    const skills = document.querySelectorAll(".skills ul li");

    skills.forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            showTooltip(skill);
        });
        skill.addEventListener("mouseleave", removeTooltip);
    });
}

// Function to display a tooltip with the skill description
function showTooltip(skill: Element): void {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.innerText = getSkillDetails(skill.textContent || "");
    document.body.appendChild(tooltip);

    // Position tooltip above the skill item
    const rect = skill.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;
}

// Remove the tooltip from the document
function removeTooltip(): void {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) tooltip.remove();
}

// Return detailed descriptions for each skill
function getSkillDetails(skillName: string): string {
    const skillDescriptions: { [key: string]: string } = {
        "Digital Marketing": "Expertise in SEO, social media strategy, and audience engagement.",
        "HTML": "Markup language for structuring and presenting content on the web.",
        "CSS": "Styling language used to visually enhance HTML elements.",
        "JavaScript": "Programming language for dynamic and interactive web experiences.",
        "TypeScript": "JavaScript with types for enhanced development and error prevention.",
        "Next.js": "React framework with server-side rendering for highly optimized apps.",
        "Cloud Computing Fundamentals": "Knowledge in cloud infrastructure, deployment, and scalability.",
    };
    return skillDescriptions[skillName] || "Skill details not available.";
}
