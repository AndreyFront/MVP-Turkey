import Swiper from '../../../../node_modules/swiper/swiper-bundle.esm'

export default function bigSlider() {
    const blockSlider = document.querySelector('[data-big-slider="block-slider"]')

    if (!blockSlider) return

    const firstSlider = blockSlider.querySelector('[data-big-slider="first-slider"]')
    const secondSlider = blockSlider.querySelector('[data-big-slider="second-slider"]')

    const prevBtn = blockSlider.querySelector('[data-big-slider="prev-btn"]')
    const nextBtn = blockSlider.querySelector('[data-big-slider="next-btn"]')
    const pagination = blockSlider.querySelector('[data-big-slider="pagination"]')

    const firstSwiper = new Swiper(firstSlider, {
        slidesPerView: 4,
        spaceBetween: 5,
        direction: 'horizontal',
        freeMode: true,
        allowTouchMove: true,
        watchSlidesProgress: true,
        breakpoints: {
            992: {
                slidesPerView: 6,
                spaceBetween: 15,
                direction: 'vertical',
                watchSlidesProgress: false,
                allowTouchMove: false,
            }
        }
    })

    const secondSwiper = new Swiper(secondSlider, {
        spaceBetween: 15,
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },
        pagination: {
            el: pagination,
        },
        thumbs: {
            swiper: firstSwiper,
        },
    })

    if (window.matchMedia('(max-width: 992px)').matches) {
        firstSlider.removeAttribute('data-scrollbar')
    }
}