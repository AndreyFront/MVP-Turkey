export default function propertyDetails() {
    if (window.matchMedia('(max-width: 992px)').matches) {
        const blockPropertyDetails = document.querySelector('[data-property-details="block-property-details"]')

        if (!blockPropertyDetails) return
    
        const list = blockPropertyDetails.querySelector('[data-property-details="list"]')
        const btn = blockPropertyDetails.querySelector('[data-property-details="btn"]')
        
        const heightList = list.offsetHeight
        list.style.height = '250px'

        btn.addEventListener('click', () => {
            if (blockPropertyDetails.classList.contains('active')) {
                list.style.height = '250px'
                btn.textContent = 'Show More'
            } else {
                list.style.height = `${heightList}px`
                btn.textContent = 'Hide'
            }

            blockPropertyDetails.classList.toggle('active')
        })
    }
}