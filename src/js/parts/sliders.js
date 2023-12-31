import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');
if (sliders.length) {
    sliders.forEach(slider => {
        let prev = slider.querySelector('.swiper__controll-prev')
        let next = slider.querySelector('.swiper__controll-next')

        new Swiper(slider, {
            modules: [
                Navigation, Autoplay,
            ],
            loop: true,

            breakpoints: {

                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                },
                550: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 4,
                },
                1220: {
                    slidesPerView: 5,
                },
            },

            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            navigation: {
                prevEl: prev,
                nextEl: next,
            },
        })
    })
}
