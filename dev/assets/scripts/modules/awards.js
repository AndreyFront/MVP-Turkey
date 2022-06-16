import Swiper from '../../../../node_modules/swiper/swiper-bundle.esm'

export default function awards() {
    const blockAwards = document.querySelector('[data-awards="block-awards"]')

    if (!blockAwards) return

    const slider = blockAwards.querySelector('[data-awards="slider"]')
    const prevBtn = blockAwards.querySelector('[data-awards="prev-btn"]')
    const nextBtn = blockAwards.querySelector('[data-awards="next-btn"]')

    const swiper = new Swiper(slider, {
        slidesPerView: 2.1,
        spaceBetween: 8,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        breakpoints: {
          767: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }
    })
}