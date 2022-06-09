import smoothView from '../libs/smoothView'

export default function propertyDescription() {
    const blockPropertyDescription = document.querySelector('[data-property-description="block-property-description"]')

    if (!blockPropertyDescription) return

    const blockText = blockPropertyDescription.querySelector('[data-property-description="block-text"]')
    const btn = blockPropertyDescription.querySelector('[data-property-description="btn"]')
    if (window.matchMedia('(min-width: 992px)').matches) {
        smoothView(btn, blockText, 81)
    } else {
        smoothView(btn, blockText, 335)
    }

    btn.addEventListener('click', () => {
        if (blockText.classList.contains('not-active')) {
            btn.textContent = 'Show More'
        } else {
            btn.textContent = 'Hide'
        }
    })
}