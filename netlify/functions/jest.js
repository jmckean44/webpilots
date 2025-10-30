//const handler = require('./sendEmail').handler;
//const nodemailer = require('nodemailer');
import handler from './send-email';
import nodemailer from 'nodemailer';

// filepath: /Users/design3/Jeff/www/Portfolio/netlify/functions/sendEmail.test.js

jest.mock('nodemailer');

describe('sendEmail function', () => {
	let mockSendMail;

	beforeEach(() => {
		mockSendMail = jest.fn();
		nodemailer.createTransport.mockReturnValue({ sendMail: mockSendMail });

		process.env.SMTP_HOST = 'smtp.mailtrap.io';
		process.env.SMTP_PORT = '587';
		process.env.SMTP_USERNAME = 'test_user';
		process.env.SMTP_PASSWORD = 'test_pass';
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('should return 400 if email is missing', async () => {
		const event = { body: JSON.stringify({}) };

		const response = await handler(event);

		expect(response.statusCode).toBe(400);
		expect(JSON.parse(response.body).message).toBe('Email is required.');
	});

	test('should return 200 if email is sent successfully', async () => {
		const event = { body: JSON.stringify({ email: 'test@example.com' }) };
		mockSendMail.mockResolvedValueOnce({});

		const response = await handler(event);

		expect(response.statusCode).toBe(200);
		expect(JSON.parse(response.body).message).toBe('Email sent successfully!');
		expect(mockSendMail).toHaveBeenCalledWith(
			expect.objectContaining({
				to: 'test@example.com',
				subject: 'Test Email',
			})
		);
	});

	test('should return 500 if email sending fails', async () => {
		const event = { body: JSON.stringify({ email: 'test@example.com' }) };
		mockSendMail.mockRejectedValueOnce(new Error('SMTP error'));

		const response = await handler(event);

		expect(response.statusCode).toBe(500);
		expect(JSON.parse(response.body).message).toBe('Failed to send email.');
		expect(mockSendMail).toHaveBeenCalled();
	});
});
