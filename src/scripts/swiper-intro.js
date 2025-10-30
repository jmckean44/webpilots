import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/effect-fade';
import 'swiper/scss/autoplay';

document.addEventListener('astro:page-load', () => {
	const swiper = new Swiper('.swiper-intro', {
		modules: [Autoplay, EffectFade],
		effect: 'fade',
		fadeEffect: { crossFade: true },
		spaceBetween: 0,
		slidesPerView: 1,
		speed: 1000,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		loop: true,
	});

	const hero = document.querySelector('.swiper-hero');
	if (hero) {
		hero.swiper = swiper;
	}
});
