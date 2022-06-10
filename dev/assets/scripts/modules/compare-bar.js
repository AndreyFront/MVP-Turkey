export default function compareBar() {
    const blockCompareBar = document.querySelector('[data-compare-bar="block-compare-bar"]')

    if (!blockCompareBar) return

    const blackout = document.createElement('div')
    blackout.classList.add('compare-bar__blackout')
    document.body.appendChild(blackout)

    const btn = blockCompareBar.querySelector('[data-compare-bar="btn"]')

    const scrollLock = (elem) => {
        if (elem.classList.contains('active')) {
            document.documentElement.classList.add('scroll-lock')
        } else {
            document.documentElement.classList.remove('scroll-lock')
        }
    }

    btn.addEventListener('click', () => {
        blockCompareBar.classList.toggle('active')
        blackout.classList.toggle('active')

        scrollLock(blockCompareBar)
    })

    blackout.addEventListener('click', () => {
        blockCompareBar.classList.toggle('active')
        blackout.classList.toggle('active')

        scrollLock(blockCompareBar)
    })
}