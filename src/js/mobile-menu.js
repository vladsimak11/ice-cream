(() => {
  const scrollOn = false;
  const classMenuHidden = 'mobile-menu--hidden';

  const btnMenuOpen = document.querySelector('[data-menu-open]');
  const btnMenuClose = document.querySelector('[data-menu-close]');
  const menuMobile = document.querySelector('[data-mobile-menu]');
  const menuMobileNav = document.querySelector('[data-menu-nav]');

  btnMenuOpen.addEventListener('click', toggleMenu);
  btnMenuClose.addEventListener('click', toggleMenu);



  const menuItems = Array.from(menuMobileNav.children);
  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', toggleMenu);
  });

  function toggleMenu() {
    const isOpenned = !menuMobile.classList.toggle(classMenuHidden);
    btnMenuOpen.setAttribute('aria-expanded', isOpenned);
    toggleScroll(isOpenned);
  }

  window.matchMedia(`(min-width: 1200px)`).addEventListener('change', e => {
  
    if (e.matches && !menuMobile.classList.contains(classMenuHidden)) {
      menuMobile.classList.add(classMenuHidden);
      btnMenuOpen.setAttribute('aria-expanded', false);
      toggleScroll(scrollOn);
    }
  });
})();
