export const disableScroll = () => {
    const positionTop = window.screenY || document.documentElement.scrollTop;
    const positionLeft = window.screenX || document.documentElement.scrollLeft;

    window.onscroll = () => window.scrollTo(positionLeft, positionTop);
}
