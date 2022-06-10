import Swiper from '../../../../node_modules/swiper/swiper-bundle.esm'

export default function popularCities() {
    const blockPopularCities = document.querySelector('[data-popular-cities="block-popular-cities"]')

    if (!blockPopularCities) return

    const slider = blockPopularCities.querySelector('[data-popular-cities="slider"]')
    const prevBtn = blockPopularCities.querySelector('[data-popular-cities="prev-btn"]')
    const nextBtn = blockPopularCities.querySelector('[data-popular-cities="next-btn"]')

    const swiper = new Swiper(slider, {
        slidesPerView: 2.3,
        spaceBetween: 7,
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            767: {
                slidesPerView: 4,
                spaceBetween: 10
            }
        }
    })
}