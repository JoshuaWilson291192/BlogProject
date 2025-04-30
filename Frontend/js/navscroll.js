document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll("section"); // Assuming your sections are <section> elements

    window.addEventListener("scroll", () => {
        let atTopOfSection = false;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.top >= 0) {
                atTopOfSection = true;
            }
        });

        if (window.scrollY > 50 && !atTopOfSection) {
            // Add the "scrolled" class when the user scrolls down and not at the top of a section
            navbar.classList.add("scrolled");
        } else {
            // Remove the "scrolled" class when at the top of the page or a section
            navbar.classList.remove("scrolled");
        }
    });
});