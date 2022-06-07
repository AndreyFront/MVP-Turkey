export default function select() {
    const blocksSelect = document.querySelectorAll('[data-select="block-select"]')

    if (!blocksSelect.length) return

    const closeSelet = (currentElement = false) => {        
        if (currentElement) {
            blocksSelect.forEach(elem => {
                if (elem != currentElement && elem.classList.contains('active')) elem.classList.remove('active')
            })
        } else {
            blocksSelect.forEach(elem => {
                if (elem.classList.contains('active')) elem.classList.remove('active')
            })
        }
    }

    document.addEventListener('click', (event) => {
        const elem = event.target
        if (elem.closest('[data-select="block-select"]')) {
            if (elem.closest('[data-select="btn"]')) {
                const blockSelect = elem.closest('[data-select="block-select"]')
                blockSelect.classList.toggle('active')
                closeSelet(blockSelect)
            }
        } else closeSelet()
    })
}