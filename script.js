document.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("main h1");
  const header = document.querySelector(".print-container header");
  const main = document.querySelector(".print-container main");

  function moveElements() {
    const isMobile = window.innerWidth <= 600;
    const targetElement = isMobile ? header.parentNode : main;
    const insertBeforeElement = isMobile ? header : null;

    if (h1.parentNode !== targetElement) {
      targetElement.insertBefore(h1, insertBeforeElement);
    }
  }

  moveElements();
  window.addEventListener("resize", moveElements);
});
