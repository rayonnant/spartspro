import './style.scss'

const header: HTMLElement | null = document.querySelector('.header')
const burger: HTMLElement | null = document.querySelector('.header__nav-burger')
const navList: HTMLElement | null = document.querySelector('.header__nav-list')
const body: HTMLElement | null = document.body

const checkScreenSize = (): void => {
    const isDesktop = window.innerWidth >= 1440

    if (isDesktop && navList && burger && header) {
        navList.classList.remove('active')
        burger.classList.remove('active')
        header.classList.remove('nav-open')
        body.classList.remove('nav-open')
        body.style.position = ''
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (burger && navList && header) {
        burger.addEventListener('click', () => {
            if (window.innerWidth >= 1440) return;

            const isActive: boolean = navList.classList.toggle('active')
            burger.classList.toggle('active')
            header.classList.toggle('nav-open')
            body.classList.toggle('nav-open')

            if (isActive) {
                window.scrollTo(0, 0)
            }
        });
    }
});

window.addEventListener('resize', checkScreenSize)
