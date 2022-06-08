export default function compareBtn() {
    const btn = document.querySelector('[data-compare-btn="btn"]')

    if (!btn) return undefined

    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
    })
}