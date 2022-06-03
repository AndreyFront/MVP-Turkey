export default function textarea() {
    const blockTextareas = document.querySelectorAll('[data-textarea="block-textarea"]')
    if (!blockTextareas.length) return

    document.addEventListener('pointerdown', (event) => {
        if (event.target.closest('[data-textarea="block-textarea"]')) {
            const blockTextarea = event.target.closest('[data-textarea="block-textarea"]')
            const textarea = blockTextarea.querySelector('[data-textarea="textarea"]')
            const placeholder = blockTextarea.querySelector('[data-textarea="placeholder"]')
            
            if (!blockTextarea.classList.contains('active')) {
                blockTextarea.classList.add('active')
                textarea.focus()

                textarea.addEventListener('focusout', () => {
                    if (!textarea.value) {
                        blockTextarea.classList.remove('active')
                    }
                })
            }
        }
    })
}