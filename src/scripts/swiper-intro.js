import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/effect-fade';
import 'swiper/scss/autoplay';
//import 'swiper/scss/pagination';

document.addEventListener('astro:page-load', () => {
	const swiper = new Swiper('.swiper-intro', {
		//modules: [Pagination, Autoplay, EffectFade],
		modules: [Autoplay, EffectFade],
		effect: 'fade',
		fadeEffect: { crossFade: true },
		spaceBetween: 0,
		slidesPerView: 1,
		speed: 1000,
		//autoHeight: true,
		autoplay: true,
		loop: true,
		//width: 1000,
		//watchSlidesProgress: true,
		//watchSlidesVisibility: true,
		//observer: true,
		//observeParents: true,
		//freeMode: true,
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	clickable: true,
		// },
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		// breakpoints: {
		// 	1500: {
		// 		slidesPerView: 2,
		// 	},
		// 	800: {
		// 		slidesPerView: 2,
		// 	},
		// 	500: {
		// 		slidesPerView: 1,
		// 	},
		// },
	});
	document.querySelector('.swiper-hero').swiper = swiper;
});
