document.addEventListener("DOMContentLoaded", () => {
    const wheelIcons = document.querySelectorAll(".wheel-icon");
    const wheelLabel = document.querySelector(".wheel-label");
  
    wheelIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        const label = icon.getAttribute("data-label");
        wheelLabel.textContent = label; // Update the label text
      });
  
      icon.addEventListener("mouseleave", () => {
        wheelLabel.textContent = "Hover over an icon"; // Reset the label text
      });
    });
  });