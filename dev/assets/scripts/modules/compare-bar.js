import Swiper from '../../../../node_modules/swiper/swiper-bundle.esm'

export default function compareBar() {
    const blockCompareBar = document.querySelector('[data-compare-bar="block-compare-bar"]')

    if (!blockCompareBar) return

    const blackout = document.createElement('div')
    blackout.classList.add('compare-bar__blackout')
    document.body.appendChild(blackout)

    const btn = blockCompareBar.querySelector('[data-compare-bar="btn"]')
    const slider = blockCompareBar.querySelector('[data-compare-bar="slider"]')

    const swiper = new Swiper(slider, {
        slidesPerView: 2.2,
        spaceBetween: 10,
        freeMode: true,
        allowTouchMove: true,
        breakpoints: {
            1650: {
                slidesPerView: 6.2,
            },
            1440: {
                slidesPerView: 5.2,
            },
            1200: {
                slidesPerView: 4.2,
            },
            576: {
                slidesPerView: 3.2,
                spaceBetween: 20,
            }
        }
    })

    const scrollLock = (elem) => {
        if (elem.classList.contains('active')) {
            document.documentElement.classList.add('scroll-lock')
        } else {
            document.documentElement.classList.remove('scroll-lock')
        }
    }

    btn.addEventListener('click', () => {
        blockCompareBar.classList.toggle('active')
        blackout.classList.toggle('active')

        // scrollLock(blockCompareBar)
    })

    blackout.addEventListener('click', () => {
        blockCompareBar.classList.toggle('active')
        blackout.classList.toggle('active')

        // scrollLock(blockCompareBar)
    })
}