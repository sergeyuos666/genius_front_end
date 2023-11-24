const modalWindows = document.querySelector('.backdrop');
const modalBtnopen = document.querySelector('.header__btn_open');
const modalBtnclose = document.querySelector('.modal__btn_close');

const toggleModal = () => modalWindows.classList.toggle('is-hidden');

modalBtnopen.addEventListener('click', toggleModal);

modalBtnclose.addEventListener('click', toggleModal);