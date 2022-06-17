export default function tags() {
    const blockTags = document.querySelector('[data-tags="block-tags"]')

    if (!blockTags) return

    const blockBtns = blockTags.querySelector('[data-tags="block-btns"]')
    const tags = blockTags.querySelectorAll('[data-tags="tag"]')

    const btnToggleShow = blockTags.querySelector('[data-tags="btn-toggle-show"]')

    const widthBlockBtns = blockBtns.offsetWidth
    const widthBlockTags = blockTags.offsetWidth

    const availableArea = (widthBlockTags - widthBlockBtns) - 50

    let widthTags = 0
    let countShowTags = 0

    tags.forEach((tag, index) => {
        const nextTag = tags[index + 1]

        if (nextTag) {
            const widthNextTag = nextTag.offsetWidth

            if (widthNextTag) {
                if ((widthTags + widthNextTag) < availableArea) {
                    widthTags += tag.offsetWidth
                    countShowTags++
                    tag.classList.add('active')
                }
            }
        }
    })

    btnToggleShow.addEventListener('click', () => {
        blockTags.classList.toggle('active')
        btnToggleShow.classList.toggle('active')

        if (blockTags.classList.contains('active')) {
            tags.forEach(tag => {
                tag.classList.add('active')
            })
        } else {
            tags.forEach((tag, index) => {
                if ((index + 1) <= countShowTags) {
                    tag.classList.add('active')
                } else {
                    tag.classList.remove('active')
                }
            })
        }
    })
}