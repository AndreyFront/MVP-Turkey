export default function toggleProperty() {
    const blockToggleProperty = document.querySelector('[data-toggle-property="block-toggle-property"]')

    if (!blockToggleProperty) return

    blockToggleProperty.addEventListener('click', (event) => {
        blockToggleProperty.classList.toggle('active')

        if (event.target.closest('[data-big-slider="block-slider"]')) {
            const blockSlider = event.target.closest('[data-big-slider="block-slider"]')

            const wrapperMap = blockSlider.querySelector('[data-big-slider="wrapper-map"]')
            const wrapperSlider = blockSlider.querySelector('[data-big-slider="wrapper-slider"]')

            if (blockToggleProperty.classList.contains('active')) {
                wrapperMap.classList.remove('active')
                wrapperSlider.classList.add('active')
            } else {
                wrapperSlider.classList.remove('active')
                wrapperMap.classList.add('active')
            }
        }
    })
}