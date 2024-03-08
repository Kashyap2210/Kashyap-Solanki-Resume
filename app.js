document.querySelectorAll(".section .sub-section").forEach((section) => {
  section.addEventListener("click", function () { //Event listner for section.
    const targetId = this.textContent.toLowerCase(); // We store which sub-section is clicked.
    const target = document.getElementById(targetId); //We select the sub-section clicked.
    if (target) { //If target exists then we do scroll event.
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth",
      });
    }
  });
});
