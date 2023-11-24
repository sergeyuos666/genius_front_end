const modalWindowsOne = document.querySelector('.mobile-menu');
const modalBtnopenOne = document.querySelector('.mobile-menu__btn_open');
const modalBtncloseOne = document.querySelector('.mobile-menu__btn_close');

const toggleMenu = () => modalWindowsOne.classList.toggle('is-open');

modalBtnopenOne.addEventListener('click', toggleMenu);

modalBtncloseOne.addEventListener('click', toggleMenu);