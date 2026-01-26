// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mainNav = document.querySelector('.main-nav');

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', function() {
      const isOpen = mainNav.classList.toggle('is-open');
      hamburgerBtn.classList.toggle('is-active');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
      hamburgerBtn.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
    });

    // Close menu when clicking on a link
    mainNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        mainNav.classList.remove('is-open');
        hamburgerBtn.classList.remove('is-active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.setAttribute('aria-label', '메뉴 열기');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!hamburgerBtn.contains(event.target) && !mainNav.contains(event.target)) {
        mainNav.classList.remove('is-open');
        hamburgerBtn.classList.remove('is-active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.setAttribute('aria-label', '메뉴 열기');
      }
    });
  }
});
