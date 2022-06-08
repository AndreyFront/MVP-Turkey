export default function favoritesIcon() {
    const blocksIcon = document.querySelectorAll('[data-favorites-icon="block-icon"]')

    if (!blocksIcon.length) return

    document.addEventListener('click', (event) => {
        if (event.target.closest('[data-favorites-icon="block-icon"]')) {
            const blockIcon = event.target.closest('[data-favorites-icon="block-icon"]')

            blockIcon.classList.toggle('active')
        }
    })
}