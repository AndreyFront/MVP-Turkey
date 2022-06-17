export default function smoothScrolling() {
    const anchors = document.querySelectorAll('[data-smooth-scrolling*="#"]')

    if (!anchors.length) return

    anchors.forEach(anchor => {
        anchor.addEventListener('click', (event) => {
            event.preventDefault()
            
            const blockID = anchor.getAttribute('data-smooth-scrolling').substr(1)
            
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })
}