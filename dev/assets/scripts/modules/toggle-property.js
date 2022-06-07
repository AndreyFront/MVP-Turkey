export default function toggleProperty() {
    const blockToggleProperty = document.querySelector('[data-toggle-Property="block-toggle-property"]')

    if (!blockToggleProperty) return

    blockToggleProperty.addEventListener('click', () => {
        blockToggleProperty.classList.toggle('active')
    })
}