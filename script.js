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
