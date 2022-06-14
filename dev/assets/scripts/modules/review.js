import Swiper from '../../../../node_modules/swiper/swiper-bundle.esm'

export default function review() {
    const blocksReview = document.querySelectorAll('[data-review="block-review"]')

    if (!blocksReview.length) return

    blocksReview.forEach(blockReview => {
        const slider = blockReview.querySelector('[data-review="slider"]')

        if (slider) {
            const swiper = new Swiper(slider, {
                slidesPerView: 9.5,
                spaceBetween: 10,
                freeMode: true,
            });
        }
    })
}