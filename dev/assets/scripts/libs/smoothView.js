export default function smoothView(btn, el, startHeight = 0) {

    if (!btn && !el) return

    let heightEl = el.offsetHeight
    el.classList.add('not-active')
    el.style.height = `${startHeight}px`

    console.log('startHeight, ', startHeight)
    console.log('heightEl, ', heightEl)

    if (startHeight > 0) {
        if (heightEl < startHeight) {
            el.classList.remove('not-active')
            el.style.height = `${heightEl}px`
        }
    }

    const update = () => {
        el.style.height = 'auto'
        setTimeout(() => {
            heightEl = el.offsetHeight
            el.style.height = `${heightEl}px`
        }, 100)
    }

    btn.addEventListener('click', () => {
        if (el.classList.contains('not-active')) {
            el.classList.remove('not-active')
            el.style.height = `${heightEl}px`
        } else {
            el.classList.add('not-active')
            el.style.height = `${startHeight}px`
        }
    })

    let observer = new MutationObserver(mutationRecords => {
        update()
    })
      
    observer.observe(el, {
        childList: true, 
        subtree: true,
        characterDataOldValue: true
    })
}