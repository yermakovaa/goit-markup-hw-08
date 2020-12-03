const refs = {
  menuBtn: document.querySelector('[data-menu-button]'),
  mobileMenu: document.querySelector('[data-menu]'),
};

refs.menuBtn.addEventListener('click', onOpenMobileMenu);

function onOpenMobileMenu() {
  const expanded =
    refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;
  refs.menuBtn.classList.toggle('is-open');
  refs.menuBtn.setAttribute('aria-expanded', !expanded);
  refs.mobileMenu.classList.toggle('is-open');
}
