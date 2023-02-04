import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);

const isMobile = md.mobile() != null;

export const isTouch = () => {

    const html = document.querySelector('html');

    if (isMobile) {

        html.classList.add('Touch');
    } else {

        html.classList.add('notTouch');
    }
}