// script.js

document.querySelectorAll(".section .sub-section").forEach((section) => {
  section.addEventListener("click", function () {
    const targetId = this.textContent.toLowerCase(); // Assuming section names match IDs of sections on the page
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
