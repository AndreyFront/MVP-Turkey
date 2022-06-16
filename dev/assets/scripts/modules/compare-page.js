import Swiper from '../../../../node_modules/swiper/swiper-bundle.esm'

export default function comparePage() {
    const blockComparePage = document.querySelector('[data-compare-page="block-compare-page"]')

    if (!blockComparePage) return

    const sliders = blockComparePage.querySelectorAll('[data-compare-page="slider"]')
    const prevBtn = blockComparePage.querySelector('[data-compare-page="prev-btn"]')
    const nextBtn = blockComparePage.querySelector('[data-compare-page="next-btn"]')

    let firstSlider;
    let secondSlider;

    sliders.forEach((slider, index) => {
        const swiper = new Swiper(slider, {
            slidesPerView: 2.2,
            spaceBetween: 10,
            watchSlidesProgress: true,
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            breakpoints: {
                1800: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 2.1,
                    spaceBetween: 20,
                },
                780: {
                    slidesPerView: 3,
                }
            }
        })

        if (index > 0) {
            secondSlider = swiper
        } else {
            firstSlider = swiper
        }
    })

    firstSlider.controller.control = [secondSlider]
    secondSlider.controller.control = [firstSlider]

    const wrapperNavigation = blockComparePage.querySelector('[data-compare-page="wrapper-navigation"]')

    window.addEventListener('scroll', function() {
        const number = wrapperNavigation.getBoundingClientRect().top
        if (number < 10) {
            wrapperNavigation.classList.add('active')
        } else {
            wrapperNavigation.classList.remove('active')
        }
    })

    const blocksFeature = blockComparePage.querySelectorAll('[data-compare-page="block-feature"]')
    const blocksValue = blockComparePage.querySelectorAll('[data-compare-page="block-value"]')
    const slides = blockComparePage.querySelectorAll('[data-compare-page="slide"]')

    let defaultHeight = 67

    let itemsValueIndex = []

    if (window.matchMedia("(min-width: 992px)").matches) {

        defaultHeight = 54

        let itemsIndex = []
        let itemsValueIndex = []
        let arrBlocksValue = []

        blocksValue.forEach((blockValue, index) => {
            const itemsValue = blockValue.querySelectorAll('li')

            itemsValue.forEach((itemValue, indexItemsValue) => {
                if (itemValue.offsetHeight > defaultHeight) {
                    itemsValueIndex.push({
                        height: itemValue.offsetHeight,
                        indexBlock: index,
                        indexItem: indexItemsValue,
                    })
                }
            })
        })

        blocksFeature.forEach((blockFeature, index) => {
            const itemsFeature = blockFeature.querySelectorAll('li')
            const blocksFeatureHead = blockFeature.querySelector('[data-compare-page="block-feature-head"]').offsetHeight
            let blocksValue;

            slides.forEach(slide => {
                blocksValue = slide.querySelectorAll('[data-compare-page="block-value"]')
                blocksValue[index].style.marginTop = `${blocksFeatureHead}px`
            })
            
            if (itemsFeature.length) {
                itemsFeature.forEach((itemFeature, indexItemsFeature) => {
                    if (itemFeature.offsetHeight > defaultHeight) {
                        itemsIndex.push({
                            height: itemFeature.offsetHeight,
                            indexBlock: index,
                            indexItem: indexItemsFeature,
                        })
                    }
                })
            }

            if (itemsValueIndex.length) {
                itemsValueIndex.forEach(itemIndex => {
                    const indexItem = itemIndex.indexItem
                    const indexBlock = itemIndex.indexBlock
                    const height = itemIndex.height
                    if (indexBlock === index) {
                        itemsFeature[indexItem].style.height = `${height}px`
                    }
                })
            }

            const countItem = blockFeature.querySelector('[data-compare-page-count]')
            if (countItem) {
                const listFeature = blockFeature.querySelector('[data-compare-page="list-feature"]')
                const heightListFeature = listFeature.offsetHeight
                const count = countItem.getAttribute('data-compare-page-count')

                if (itemsFeature.length > count) {
                    let heightItems = 0;
                    itemsFeature.forEach((itemFeature, index) => {
                        if (index <= count - 1) {
                            heightItems += itemFeature.offsetHeight
                        }
                    })

                    arrBlocksValue.push({
                        height: heightItems,
                        index,
                    })
                    
                    listFeature.style.height = `${heightItems + 1}px`

                    blockFeature.insertAdjacentHTML('beforeend', `
                        <button type="button" class="btn btn--size-sm btn--theme--light-blue" data-compare-page="btn-more">
                            <span class="btn__text">Show all amenities</span>
                        </button>
                    `)

                    if (index + 1 != blocksFeature.length) {
                        let currentIndex = index
                        const blocksFeatureHead = blocksFeature[currentIndex + 1].querySelector('[data-compare-page="block-feature-head"]')
                        blocksFeatureHead.style.paddingTop = `100px`
                    }

                    blockFeature.addEventListener('click', (event) => {
                        if (event.target.closest('[data-compare-page="btn-more"]')) {
                            const btnMore = event.target.closest('[data-compare-page="btn-more"]')
                            const btnText = btnMore.querySelector('span')
                            if (btnMore.classList.contains('active')) {
                                listFeature.style.height = `${heightItems + 1}px`
                                slides.forEach(slide => {
                                    const listValue = slide.querySelectorAll('[data-compare-page="list-value"]')
                                    listValue[index].style.height = `${heightItems + 1}px`
                                })

                                btnText.textContent = 'Show all amenities'
                            } else {
                                listFeature.style.height = `${heightListFeature + 1}px`
                                slides.forEach(slide => {
                                    const listValue = slide.querySelectorAll('[data-compare-page="list-value"]')
                                    listValue[index].style.height = `${heightListFeature + 1}px`
                                })

                                btnText.textContent = 'Hide all amenities'
                            }
                            btnMore.classList.toggle('active')
                        }
                    })
                }
            }
        })

        slides.forEach(slide => {
            const blocksValue = slide.querySelectorAll('[data-compare-page="block-value"]')
            const listsValue = slide.querySelectorAll('[data-compare-page="list-value"]')

            blocksValue.forEach((blockValue, indexBlocksValue) => {
                const itemsValue = blockValue.querySelectorAll('li')
                if (itemsIndex.length) {
                    itemsIndex.forEach(itemIndex => {
                        const indexItem = itemIndex.indexItem
                        const indexBlock = itemIndex.indexBlock
                        const height = itemIndex.height
                        if (indexBlock === indexBlocksValue) {
                            itemsValue[indexItem].style.height = `${height}px`
                        }
                    })
                }

                if (itemsValueIndex.length) {
                    itemsValueIndex.forEach(itemIndex => {
                        const indexItem = itemIndex.indexItem
                        const indexBlock = itemIndex.indexBlock
                        const height = itemIndex.height
                        if (indexBlock === indexBlocksValue) {
                            itemsValue[indexItem].style.height = `${height}px`
                        }
                    })
                }

                if (arrBlocksValue.length) {
                    arrBlocksValue.forEach(arrBlockValue => {
                        const indexBlock = arrBlockValue.index
                        const height = arrBlockValue.height

                        if (indexBlocksValue === indexBlock) {
                            listsValue[indexBlock].style.height = `${height}px`
                        }
                    })
                }
            })
        })
    }

    slides.forEach(slide => {
        const blocksValue = slide.querySelectorAll('[data-compare-page="block-value"]')

        blocksValue.forEach((blockValue, indexBlocksValue) => {
            const itemsValue = blockValue.querySelectorAll('li')

            itemsValue.forEach((itemValue, indexItemsValue) => {
                if (itemValue.offsetHeight > defaultHeight) {
                    itemsValueIndex.push({
                        height: itemValue.offsetHeight,
                        indexBlock: indexBlocksValue,
                        indexItem: indexItemsValue,
                    })
                }
            })

            if (itemsValueIndex.length) {
                itemsValueIndex.forEach(itemIndex => {
                    const indexItem = itemIndex.indexItem
                    const indexBlock = itemIndex.indexBlock
                    const height = itemIndex.height
                    if (indexBlock === indexBlocksValue) {
                        itemsValue[indexItem].style.height = `${height}px`
                    }
                })
            }
        })
    })
}