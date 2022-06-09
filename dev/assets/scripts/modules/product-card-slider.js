import Swiper from '../../../../node_modules/swiper/swiper-bundle.esm'

export default function productCardSlider() {
    const blocksSlider = document.querySelectorAll('[data-product-card-slider="block-slider"]')

    if (!blocksSlider.length) return

    let slider;
    let nextBtn;
    let prevBtn;

    blocksSlider.forEach(item => {
        slider = item.querySelector('[data-product-card-slider="slider"]')
        prevBtn = item.querySelector('[data-product-card-slider="prev-btn"]')
        nextBtn = item.querySelector('[data-product-card-slider="next-btn"]')

        const swiper = new Swiper(slider, {
            slidesPerView: 2.15,
            spaceBetween: 8,
            watchSlidesProgress: true,
            navigation: {
              nextEl: nextBtn,
              prevEl: prevBtn,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
            }
        })
    })
}