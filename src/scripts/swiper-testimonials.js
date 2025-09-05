import Swiper from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/effect-fade';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';

document.addEventListener('astro:page-load', () => {
	const swiper = new Swiper('.swiper-testimonials', {
		modules: [Autoplay, EffectFade, Pagination],
		spaceBetween: 30,
		slidesPerView: 3,
		speed: 1000,
		autoHeight: false,
		autoplay: {
			delay: 60000,
			disableOnInteraction: false,
		},
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			700: {
				slidesPerView: 2,
			},
			550: {
				slidesPerView: 1,
			},
		},
	});
	document.querySelector('.swiper-hero').swiper = swiper;
});
