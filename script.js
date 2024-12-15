
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".hover-image");
  
    // Create fullscreen overlay
    const fullscreenOverlay = document.createElement("div");
    fullscreenOverlay.classList.add("fullscreen-overlay");
    document.body.appendChild(fullscreenOverlay);
  
    // Show fullscreen image on hover
    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        fullscreenOverlay.style.backgroundImage = `url(${img.src})`;
        fullscreenOverlay.style.display = "block";
      });
  
      img.addEventListener("mouseleave", () => {
        fullscreenOverlay.style.display = "none";
      });
    });
  });




 