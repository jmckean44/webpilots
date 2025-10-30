import { createClient } from '@supabase/supabase-js';

export const handler = async (event) => {
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
		'Content-Type': 'application/json',
	};

	if (event.httpMethod === 'OPTIONS') {
		return { statusCode: 200, headers, body: '' };
	}

	try {
		if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
			return {
				statusCode: 500,
				headers,
				body: JSON.stringify({ success: false, error: 'Server configuration error' }),
			};
		}

		const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

		// Get client info
		const clientIP = event.headers['x-forwarded-for']?.split(',')[0]?.trim() || event.headers['x-real-ip'] || 'unknown';
		const userAgent = event.headers['user-agent'] || 'unknown';
		const currentTime = new Date().toISOString();

		// Parse request
		let { activityType = 'site_visit', activityData = {} } = event.body ? JSON.parse(event.body) : {};
		let country = 'unknown';

		function isValidIP(ip) {
			// Simple IPv4/IPv6 regex
			return /^(?:\d{1,3}\.){3}\d{1,3}$|^[a-fA-F0-9:]+$/.test(ip);
		}

		// upsert project_view
		if (activityType === 'project_view' && isValidIP(clientIP)) {
			await supabase.from('project_views').upsert(
				{
					visitor_ip: clientIP,
					project_name: activityData.projectName || activityData.project,
					viewed_at: currentTime,
				},
				{ onConflict: ['visitor_ip', 'project_name'] }
			);
		}

		// upsert email_campaign
		if (activityType === 'email_campaign' && isValidIP(clientIP)) {
			await supabase.from('email_campaigns').upsert(
				{
					visitor_ip: clientIP,
					campaign_id: activityData.campaignId || activityData.campaign,
					tested: activityData.tested ?? false,
					sent_at: currentTime,
				},
				{ onConflict: ['visitor_ip', 'campaign_id'] }
			);
		}

		// Upsert visitor
		await supabase.from('visitors').upsert(
			{
				ip_address: clientIP,
				user_agent: userAgent,
				last_visit: currentTime,
				first_visit: currentTime,
				total_visits: 1,
				country: country,
			},
			{ onConflict: ['ip_address'] }
		);

		// Log activity
		await supabase.from('activities').insert({
			visitor_ip: clientIP,
			activity_type: activityType,
			activity_data: activityData,
			user_agent: userAgent,
			page_url: activityData.page || activityData.url,
			timestamp: currentTime,
		});

		// Handle specific activity types with upsert for uniqueness
		if (activityType === 'project_view') {
			await supabase.from('project_views').upsert(
				{
					visitor_ip: clientIP,
					project_name: activityData.projectName || activityData.project,
					viewed_at: currentTime,
				},
				{ onConflict: ['visitor_ip', 'project_name'] }
			);
			if (error) console.error(error); // Log any upsert errors
		}

		if (activityType === 'email_campaign') {
			await supabase.from('email_campaigns').upsert(
				{
					visitor_ip: clientIP,
					campaign_id: activityData.campaignId || activityData.campaign,
					tested: true,
					sent_at: currentTime,
				},
				{ onConflict: ['visitor_ip', 'campaign_id'] }
			);
			if (error) console.error(error); // Log any upsert errors
		}

		// Debug log
		console.log(clientIP, activityType, activityData);

		// Get analytics
		const { count: uniqueVisitors } = await supabase.from('visitors').select('id', { count: 'exact', head: true });
		const { count: uniqueProjectViews } = await supabase.from('project_views').select('project_name', { count: 'exact', head: true });
		const { count: uniqueEmailCampaigns } = await supabase.from('email_campaigns').select('campaign_id', { count: 'exact', head: true });

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify({
				success: true,
				analytics: {
					uniqueVisitors: uniqueVisitors ?? 0,
					uniqueProjectViews: uniqueProjectViews ?? 0,
					uniqueEmailCampaigns: uniqueEmailCampaigns ?? 0,
				},
			}),
		};
	} catch (error) {
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({
				success: false,
				error: 'Internal server error',
				message: error.message,
				timestamp: new Date().toISOString(),
			}),
		};
	}
};
