// Слайдер
export const offersSwiper = () => {
    window.addEventListener('DOMContentLoaded', () => {

        let offersSlider;
        let isoffersSliderInitialized = document.querySelector('.offers-slider').classList.contains('swiper-initialized');
        let isPc = window.innerWidth >= 992;
        let isTablet = window.innerWidth < 992;
    
        class OffersSlider {
            constructor(offersSlider, isPc, isTablet, isoffersSliderInitialized) {
                this.offersSlider = offersSlider;
                this.isPc = isPc;
                this.isTablet = isTablet;
                this.isoffersSliderInitialized = isoffersSliderInitialized;
            }
    
            init() {
                let isPc = this.isPc;
                let isTablet = this.isTablet;
                let isoffersSliderInitialized = this.isoffersSliderInitialized;
    
                if (isTablet && !isoffersSliderInitialized) {
                    offersSlider = new Swiper('.offers-slider', {
                        init: false,
                        loop: true,
                        // mousewheel: true,
                        centeredSlides: true,
                        // createElements: true,
                        grabCursor: true,
                        speed: 700,
                        slideToClickedSlide: true,
                        slidesPerView: 1,
                        spaceBetween: 20,
                        effect: "coverflow",
                        coverflowEffect: {
                            rotate: 10,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        },
                        autoplay: {
                            dalay: 3000,
                            stopOnLastSlide: false,
                            disableOnInteraction: true,
                        },
                        breakpoints: {
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 100,
                            },
                            600: {
                                slidesPerView: 1.8,
                                spaceBetween: 60,
                            },
                            480: {
                                slidesPerView: 1.3,
                                spaceBetween: 40,
                            },
                            370: {
                                slidesPerView: 1.3,
                                spaceBetween: 30,
                            },

                            270: {
                                slidesPerView: 1.2,
                                spaceBetween: 20,
                            },
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'bullets',
                            clickable: true,
                            dynamicBullets: true,
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        
                    });
                    offersSlider.init();
                } else if (isPc && isoffersSliderInitialized) {
                    offersSlider.destroy(true, true);
                }
            }
        }
    
        let offersSliderInstance = new OffersSlider(offersSlider, isPc, isTablet, isoffersSliderInitialized);
        offersSliderInstance.init();
    
        window.addEventListener('resize', (isPc, isTablet) => {
            let isoffersSliderInitialized = document.querySelector('.offers-slider').classList.contains('swiper-initialized');
            isPc = window.innerWidth >= 992;
            isTablet = window.innerWidth < 992;
            offersSliderInstance = new OffersSlider(offersSlider, isPc, isTablet, isoffersSliderInitialized);
            offersSliderInstance.init();
        });
    });
};
