export default function modal() {
    const linkModal = document.querySelectorAll('[data-modal-link]')
    const modal = document.querySelectorAll('[data-modal="modal"]')

    if (!linkModal.length) return
    if (!modal.length) return

    const blackout = document.createElement('div');
    blackout.classList.add('modal__blackout')
    document.body.appendChild(blackout)

    linkModal.forEach(elLinkModal => {
        elLinkModal.addEventListener('click', (event) => {
            console.log(event)
            event.preventDefault()

            const idLink = elLinkModal.getAttribute('data-modal-link')

            const modal = document.querySelector(`${idLink}`)

            const open = () => {
                blackout.classList.add('active')
                modal.classList.add('active')
                document.documentElement.classList.add('modal__opened')
            }

            const close = () => {
                modal.classList.remove('active')
                blackout.classList.remove('active')
                document.documentElement.classList.remove('modal__opened')
            }

            if (modal) {
                open()
                modal.addEventListener('click', (event) => {
                    if (event.target.closest('[data-modal="close"]') || !event.target.closest('.modal__window')) {
                        close()
                    }
                })

                blackout.addEventListener('click', () => {
                    close()
                })
            }
        })
    })
}