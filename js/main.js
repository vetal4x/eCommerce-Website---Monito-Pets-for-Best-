  // Mobile Menu
  document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger__button');
    const mobileMenu = document.querySelector('.mobile__menu');
    console.log(hamburgerButton);
  hamburgerButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
  });
  });