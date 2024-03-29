import Swiper from '../../../../node_modules/swiper/swiper-bundle.esm'

export default function layouts() {
    const blockLayouts = document.querySelector('[data-layouts="block-layouts"]')

    if (!blockLayouts) return

    const slider = blockLayouts.querySelector('[data-layouts="slider"]')

    const prevBtn = blockLayouts.querySelector('[data-layouts="prev-btn"]')
    const nextBtn = blockLayouts.querySelector('[data-layouts="next-btn"]')

    const swiper = new Swiper(slider, {
        slidesPerView: 1.3,
        spaceBetween: 8,
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    })
}