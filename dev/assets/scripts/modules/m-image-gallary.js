export default function mImageGallary() {
    const blockMImageGallary = document.querySelector('[data-m-image-gallary="block-m-image-gallary"]')

    if (!blockMImageGallary) return

    const mainImage = blockMImageGallary.querySelector('[data-m-image-gallary="main-image"]')
    const wrapperPreviewImages = blockMImageGallary.querySelector('[data-m-image-gallary="wrapper-preview-images"]')
    const previewImages = blockMImageGallary.querySelectorAll('[data-m-image-gallary="wrapper-preview-images"] img')

    wrapperPreviewImages.addEventListener('click', (event) => {
        if (event.target.closest('img')) {
            const image = event.target.closest('img')
            const urlImage = image.getAttribute('src')

            previewImages.forEach(previewImage => {
                if (previewImage.classList.contains('active')) {
                    previewImage.classList.remove('active')
                }
            })

            image.classList.add('active')

            mainImage.classList.remove('active')
            setTimeout(() => {
                mainImage.setAttribute('src', urlImage)
            }, 300)
            setTimeout(() => {
                mainImage.classList.add('active')
            }, 600)
        }
    })
}