export default function compareBar() {
    const blockCompareBar = document.querySelector('[data-compare-bar="block-compare-bar"]')

    if (!blockCompareBar) return

    const blackout = document.createElement('div');
    blackout.classList.add('compare-bar__blackout')
    document.body.appendChild(blackout)

    const btn = blockCompareBar.querySelector('[data-compare-bar="btn"]')

    btn.addEventListener('click', () => {
        blockCompareBar.classList.toggle('active')
        blackout.classList.toggle('active')
    })

    blackout.addEventListener('click', () => {
        blockCompareBar.classList.toggle('active')
        blackout.classList.toggle('active')
    })
}