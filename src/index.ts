import './style.scss'

const body: HTMLElement | null = document.body
const header: HTMLElement | null = document.querySelector('.header')
const burger: HTMLElement | null = document.querySelector('.header__burger')
const navList: HTMLElement | null = document.querySelector('.header__nav-list')
const specialStock: HTMLElement | null = document.querySelector('.equipment__stock--special')

const checkScreenSize = (): void => {
    const isDesktop = window.innerWidth >= 1440

    if (isDesktop && navList && burger && header) {
        navList.classList.remove('header__nav-list--active')
        burger.classList.remove('header__burger--active')
        header.classList.remove('header--nav-open')
        body?.classList.remove('body--nav-open')
    }

    if (specialStock) {
        if (window.innerWidth < 768) {
            specialStock.textContent = 'В наличии 50 м.'
            specialStock.classList.remove('equipment__stock--order')
        } else {
            specialStock.textContent = 'Под заказ'
            specialStock.classList.add('equipment__stock--order')
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (burger && navList && header) {
        burger.addEventListener('click', () => {
            if (window.innerWidth >= 1440) return

            const isActive: boolean = navList.classList.toggle('header__nav-list--active')
            burger.classList.toggle('header__burger--active')
            header.classList.toggle('header--nav-open')
            body?.classList.toggle('body--nav-open')

            if (isActive) {
                window.scrollTo(0, 0)
            }
        })
    }

    checkScreenSize()
})

window.addEventListener('resize', checkScreenSize)
