export default function sorting() {
    const blockSorting = document.querySelector('[data-sorting="block-sorting"]')

    if (!blockSorting) return

    document.addEventListener('click', (event) => {
        if (event.target.closest('[data-sorting="block-sorting"]')) {
            const blockSorting = event.target.closest('[data-sorting="block-sorting"]')

            blockSorting.classList.toggle('active')
        } else {
            blockSorting.classList.remove('active')
        }
    })
}