export default function menu() {
    const header = document.querySelector('.header')
    const btnMenu = document.querySelector('[data-menu="btn"]')

    if (!header) return
    if (!btnMenu) return

    btnMenu.addEventListener('click', () => {
        header.classList.toggle('active-menu')
        document.documentElement.classList.toggle('scroll-lock')
    })
}