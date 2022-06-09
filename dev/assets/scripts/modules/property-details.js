import smoothView from '../libs/smoothView'

export default function propertyDetails() {
    if (window.matchMedia('(max-width: 992px)').matches) {
        const blockPropertyDetails = document.querySelector('[data-property-details="block-property-details"]')

        if (!blockPropertyDetails) return
    
        const list = blockPropertyDetails.querySelector('[data-property-details="list"]')
        const btn = blockPropertyDetails.querySelector('[data-property-details="btn"]')

        smoothView(btn, list, 250)

        btn.addEventListener('click', () => {
            if (list.classList.contains('not-active')) {
                btn.textContent = 'Show More'
            } else {
                btn.textContent = 'Hide'
            }
        })
    }
}