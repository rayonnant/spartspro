import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.header__nav-burger');
    const navList = document.querySelector('.header__nav-list');

    if (burger && navList) {
        burger.addEventListener('click', () => {
            navList.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }
});
