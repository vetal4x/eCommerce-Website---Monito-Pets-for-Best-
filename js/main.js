  // Mobile Menu
  document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger__button');
    const mobileMenu = document.querySelector('.mobile__menu');
    let menuVisible = false; // Состояние меню
  
    hamburgerButton.addEventListener('click', () => {
      menuVisible = !menuVisible;
      mobileMenu.classList.toggle('active', menuVisible);
    });
  
    let prevScrollpos = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScrollPos = window.scrollY;
      if (menuVisible && prevScrollpos < currentScrollPos) {
        // Скрыть меню при прокрутке вниз
        mobileMenu.style.left = "-70vw";
        menuVisible = false; // Меню теперь скрыто
      }
      prevScrollpos = currentScrollPos;
    });
  });
  