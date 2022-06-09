import Scrollbar from '../../../../node_modules/smooth-scrollbar/dist/smooth-scrollbar';

export default function scroll() {
    const scrollbars = document.querySelectorAll('[data-scrollbar]')

    if (!scrollbars.length) return

    const options = {
        damping: 0.1,
        alwaysShowTracks: true,
    }

    scrollbars.forEach(scrollbar => {
        Scrollbar.init(scrollbar, options);
    })
}