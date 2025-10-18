document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');

    if (toggleButton && nav) {
        toggleButton.addEventListener('click', () => {
            nav.classList.toggle('open');
            const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
            toggleButton.setAttribute('aria-expanded', !isExpanded);
        });
    }
});
const accordions = document.querySelectorAll(".accordion-header");

accordions.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const openItem = document.querySelector(".accordion-item.active");
    
    
    if (openItem && openItem !== item) {
      openItem.classList.remove("active");
    }
    
    
    item.classList.toggle("active");
  });
});
