document.querySelectorAll(".section .sub-section").forEach((section) => {
  section.addEventListener("click", function () {
    const targetId = this.textContent.toLowerCase();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});
