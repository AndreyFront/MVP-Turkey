import Swiper from '../../../../node_modules/swiper/swiper-bundle.esm'

export default function productCard() {
    const blocksProductCard = document.querySelectorAll('[data-product-card="block-product-card"]')

    if (!blocksProductCard.length) return

    blocksProductCard.forEach(blockProductCard => {
        if (window.matchMedia('(min-width: 992px)').matches) {
            const slider = blockProductCard.querySelector('[data-product-card="slider"]')

            if (slider) {
                const prevBtn = slider.querySelector('[data-product-card="prev-btn"]')
                const nextBtn = slider.querySelector('[data-product-card="next-btn"]')
                const pagination = slider.querySelector('[data-product-card="pagination"]')
    
                const swiper = new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    allowTouchMove: false,
                    navigation: {
                      nextEl: nextBtn,
                      prevEl: prevBtn,
                    },
                    pagination: {
                        el: pagination,
                    },
                })
            }
        }
    })
}