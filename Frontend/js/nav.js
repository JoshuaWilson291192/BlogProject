document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); // Select all sections
    const navLinks = document.querySelectorAll(".nav-link"); // Select all nav links
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove active class from all links
            navLinks.forEach((link) => link.classList.remove("active"));
  
            // Add active class to the link corresponding to the section in view
            const activeLink = document.querySelector(
              `.nav-link[href="#${entry.target.id}"]`
            );
            if (activeLink) {
              activeLink.classList.add("active");
            }
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );
  
    // Observe each section
    sections.forEach((section) => observer.observe(section));
  });