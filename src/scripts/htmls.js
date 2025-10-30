// HTML Email form handling
document.addEventListener('astro:page-load', () => {
	const form = document.getElementById('htmls');
	const responseDiv = document.querySelector('.response');

	// Add null check
	if (!form || !responseDiv) {
		// console.warn('Email form elements not found');
		return;
	}

	form.addEventListener('submit', async function (e) {
		e.preventDefault();

		const email = form.querySelector('input[name="email"]').value;
		const selectedCampaign = form.querySelector('input[name="campaign"]:checked');
		const button = form.querySelector('input[type="submit"]');

		if (!email) {
			responseDiv.innerHTML = `<p>Please enter your email address.</p>`;
			return;
		}

		if (!selectedCampaign) {
			responseDiv.innerHTML = `Please select a campaign.`;
			return;
		}

		try {
			button.value = 'SENDING...';
			button.disabled = true;

			const campaignId = selectedCampaign.id;

			// Check if we're in local development
			const isLocal = window.location.hostname === 'localhost' && window.location.port === '4321';

			if (isLocal) {
				// Simulate email send for local development
				responseDiv.innerHTML = `<p>Local development - email function simulated</p>`;

				if (window.portfolioAnalytics) {
					await window.portfolioAnalytics.trackEmailCampaign(campaignId, email);
				}
				return;
			}

			const response = await fetch('/.netlify/functions/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, campaignId }),
			});

			const result = await response.json();
			responseDiv.innerHTML = `<p>${result.message}</p>`;

			if (result.success && result.message === 'Email sent successfully!') {
				if (window.portfolioAnalytics) {
					await window.portfolioAnalytics.trackEmailCampaign(campaignId, email);
					sendStat('email_campaign', { campaignId, tested: true });
				}
			} else if (!result.success) {
				if (window.portfolioAnalytics) {
					window.portfolioAnalytics.addActivity(`Email failed: ${result.message}`);
				}
			}
		} catch (error) {
			responseDiv.innerHTML = `<p>An error occurred. Please try again.</p>`;

			if (window.portfolioAnalytics) {
				window.portfolioAnalytics.addActivity('Email send error');
			}
		} finally {
			button.value = 'SEND';
			button.disabled = false;
			setTimeout(() => {
				form.reset();
				responseDiv.innerHTML = '';
			}, 40000);
		}
	});
});
