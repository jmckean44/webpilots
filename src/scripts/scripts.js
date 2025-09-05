document.addEventListener('astro:page-load', () => {
	// SMOOTH SCROLLING
	let anchorlinks = document.querySelectorAll('a[href^="#"]');

	for (let item of anchorlinks) {
		item.addEventListener('click', (e) => {
			let hashval = item.getAttribute('href');
			let target = document.querySelector(hashval);
			target.scrollIntoView({
				behavior: 'smooth',
			});
			history.pushState(null, null, hashval);
			e.preventDefault();
		});
	}

	// ADD ID TO BODY// ADD ID TO BODY
	const body = document.querySelector('body');
	const pathname = window.location.pathname.replace(/^\/|\/$/g, '');

	let id = pathname.split('/')[0] || 'home'; // Get first segment or 'home' for root

	const projectPaths = ['mrc', 'cleanrooms', 'shiupong', 'dale'];

	body.setAttribute('id', id);

	if (projectPaths.includes(id)) {
		body.classList.add('project');
	}
});

//  lazyload images fade-in
document.addEventListener('astro:page-load', () => {
	const lazyImages = document.querySelectorAll('img[loading="lazy"]');

	lazyImages.forEach((img) => {
		if (img.complete && img.naturalHeight !== 0) {
			img.classList.add('loaded');
		} else {
			img.addEventListener('load', () => {
				img.classList.add('loaded');
			});
		}
	});
});

//	HEADER SCROLL
document.addEventListener('astro:page-load', () => {
	let lastScrollY = window.scrollY;
	const header = document.getElementById('header');
	let ticking = false;

	if (header && !header.classList.contains('unpinned')) {
		header.classList.add('unpinned');
	}

	function onScroll() {
		const currentScrollY = window.scrollY;
		if (!ticking) {
			window.requestAnimationFrame(() => {
				if (currentScrollY < 100) {
					header.classList.remove('pinned');
					header.classList.remove('unpinned');
				} else if (currentScrollY > lastScrollY) {
					// Scrolling down
					header.classList.add('unpinned');
					header.classList.remove('pinned');
				} else if (currentScrollY < lastScrollY) {
					// Scrolling up
					header.classList.add('pinned');
					header.classList.remove('unpinned');
				} else {
					header.classList.remove('pinned');
				}
				lastScrollY = currentScrollY;
				ticking = false;
			});
			ticking = true;
		}
	}

	window.addEventListener('scroll', onScroll);
	onScroll();
});

// MOBILE NAV
document.addEventListener('asto: page-load', () => {
	const hamburger = document.getElementById('hamburger');
	const overlay = document.getElementById('mobile-overlay');

	hamburger.addEventListener('click', () => {
		overlay.classList.toggle('active');
		hamburger.setAttribute('aria-expanded', overlay.classList.contains('active'));
	});

	// Optional: close menu when clicking outside nav or on a link
	overlay.addEventListener('click', (e) => {
		if (e.target === overlay || e.target.tagName === 'A') {
			overlay.classList.remove('active');
			hamburger.setAttribute('aria-expanded', 'false');
		}
	});
});

// CHANGE BG COLOR ON SCROLL DOWN
// window.addEventListener('scroll', () => {
// 	const body = document.body;
// 	const services = document.querySelector('.hero');
// 	if (!services) return;

// 	const rect = services.getBoundingClientRect();
// 	const viewportCenter = window.innerHeight / 2;
// 	const servicesCenter = rect.top + rect.height / 2;

// 	const distance = Math.abs(servicesCenter - viewportCenter);

// 	const range = 300;

// 	let progress = 1 - Math.min(distance / range, 1);

// 	progress = Math.max(0, Math.min(progress, 1));

// 	// Set background color with opacity based on progress
// 	const baseColor = '24, 22, 42';
// 	services.style.background = `rgba(${baseColor}, ${progress})`;
// 	services.style.p = `rgba(${baseColor}, ${progress})`;
// });
