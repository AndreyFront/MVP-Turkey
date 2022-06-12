import Swiper from '../../../../node_modules/swiper/swiper-bundle.esm'

export default function masterPlan() {
    const blockMasterPlan = document.querySelector('[data-master-plan="block-master-plan"]')

    if (!blockMasterPlan) return

    const slider = blockMasterPlan.querySelector('[data-master-plan="slider"]')
    const prevBtn = blockMasterPlan.querySelector('[data-master-plan="prev-btn"]')
    const nextBtn = blockMasterPlan.querySelector('[data-master-plan="next-btn"]')
    const pagination = blockMasterPlan.querySelector('[data-master-plan="pagination"]')

    const swiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        pagination: {
            el: pagination,
        },
    })
}