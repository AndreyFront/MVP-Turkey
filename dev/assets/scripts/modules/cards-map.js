export default function cardsMap() {
    const blockCardsMap = document.querySelector('[data-cards-map="block-cards-map"]')

    if (!blockCardsMap) return

    const btn = blockCardsMap.querySelector('[data-cards-map="btn"]')

    const blackout = document.createElement('div')
    blackout.classList.add('card-section__blackout')
    document.body.appendChild(blackout)

    const scrollLock = (elem) => {
        if (elem.classList.contains('active')) {
            document.documentElement.classList.add('scroll-lock')
        } else {
            document.documentElement.classList.remove('scroll-lock')
        }
    }

    btn.addEventListener('click', () => {
        blockCardsMap.classList.toggle('active')
        blackout.classList.toggle('active')

        // scrollLock(blockCardsMap)
    })

    blackout.addEventListener('click', () => {
        blockCardsMap.classList.toggle('active')
        blackout.classList.toggle('active')

        // scrollLock(blockCardsMap)
    })
}