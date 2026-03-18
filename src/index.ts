import './style.scss'

const body: HTMLElement | null = document.body
const header: HTMLElement | null = document.querySelector('.header')
const burger: HTMLElement | null = document.querySelector('.header__nav-burger')
const navList: HTMLElement | null = document.querySelector('.header__nav-list')
const specialStock: HTMLElement | null = document.querySelector('.equipment__stock_special')

const checkScreenSize = (): void => {
    const isDesktop = window.innerWidth >= 1440

    if (isDesktop && navList && burger && header) {
        navList.classList.remove('active')
        burger.classList.remove('active')
        header.classList.remove('nav-open')
        body.classList.remove('nav-open')
    }

    if (specialStock) {
        if (window.innerWidth < 768) {
            specialStock.textContent = 'В наличии 50 м.'
            specialStock.classList.remove('equipment__stock_order')
        } else {
            specialStock.textContent = 'Под заказ'
            specialStock.classList.add('equipment__stock_order')
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (burger && navList && header) {
        burger.addEventListener('click', () => {
            if (window.innerWidth >= 1440) return

            const isActive: boolean = navList.classList.toggle('active')
            burger.classList.toggle('active')
            header.classList.toggle('nav-open')
            body.classList.toggle('nav-open')

            if (isActive) {
                window.scrollTo(0, 0)
            }
        })
    }

    checkScreenSize()
})

window.addEventListener('resize', checkScreenSize)
