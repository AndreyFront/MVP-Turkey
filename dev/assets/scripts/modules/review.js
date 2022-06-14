import Swiper from '../../../../node_modules/swiper/swiper-bundle.esm'

export default function review() {
    const blocksReview = document.querySelectorAll('[data-review="block-review"]')

    if (!blocksReview.length) return

    blocksReview.forEach(blockReview => {
        const slider = blockReview.querySelector('[data-review="slider"]')

        if (slider) {
            const swiper = new Swiper(slider, {
                slidesPerView: 2.5,
                spaceBetween: 12,
                freeMode: true,
                breakpoints: {
                    992: {
                        slidesPerView: 9.5,
                        spaceBetween: 10,
                    },
                    767: {
                        slidesPerView: 6.5,
                        spaceBetween: 10,
                    },
                    576: {
                        slidesPerView: 4.5,
                        spaceBetween: 10,
                    },
                    420: {
                        slidesPerView: 3.5,
                        spaceBetween: 10,
                    }
                }
            })
        }
    })
}