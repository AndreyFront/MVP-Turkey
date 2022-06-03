export default function input() {
    const blockInputs = document.querySelectorAll('[data-input="block-input"]')
    if (!blockInputs.length) return

    document.addEventListener('pointerdown', (event) => {
        if (event.target.closest('[data-input="block-input"]')) {
            const blockInput = event.target.closest('[data-input="block-input"]')
            const input = blockInput.querySelector('[data-input="input"]')
            const placeholder = blockInput.querySelector('[data-input="placeholder"]')
            const eye = blockInput.querySelector('[data-input="eye"]')
            
            if (!blockInput.classList.contains('active')) {
                blockInput.classList.add('active')
                input.focus()

                input.addEventListener('focusout', () => {
                    if (!input.value) {
                        blockInput.classList.remove('active')
                    }
                })

                if (eye) {
                    eye.addEventListener('click', () => {
                        if (input.value) {
                            if (eye.classList.contains('input__eye--close')) {
                                eye.classList.remove('input__eye--close')
                                eye.classList.add('input__eye--open')
    
                                input.setAttribute('type', 'text')
                            } else {
                                eye.classList.remove('input__eye--open')
                                eye.classList.add('input__eye--close')
    
                                input.setAttribute('type', 'password')
                            }
                        }
                    })
                }
            }
        }
    })
}