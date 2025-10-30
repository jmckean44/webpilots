import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as Label from '@radix-ui/react-label';
import { useRef, useEffect } from 'react';

export default function ContactForm() {
		 const formRef = useRef(null);

		 useEffect(() => {
				if (formRef.current) {
						formRef.current.addEventListener('submit', (e) => {
								// custom logic
						});
				}
				// Cleanup
				return () => {
						if (formRef.current) {
								formRef.current.removeEventListener('submit', () => {});
						}
				};
		}, []);


		const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

		const onSubmit = (data) => {
				alert(JSON.stringify(data, null, 2));
		};

		return (
				<form ref={formRef} onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 400, margin: '0 auto' }}>
						<div style={{ marginBottom: 16 }}>
								<Label.Root htmlFor="name">Name</Label.Root>
								<input
										id="name"
										{...register('name', { required: 'Name is required' })}
										placeholder="Your name"
										style={{ width: '100%', padding: '8px', marginTop: '4px' }}
								/>
								{errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
						</div>
						<div style={{ marginBottom: 16 }}>
								<Label.Root htmlFor="email">Email</Label.Root>
								<input
										id="email"
										type="email"
										{...register('email', {
												required: 'Email is required',
												pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
										})}
										placeholder="you@email.com"
										style={{ width: '100%', padding: '8px', marginTop: '4px' }}
								/>
								{errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
						</div>
						<div style={{ marginBottom: 16 }}>
								<Label.Root htmlFor="message">Message</Label.Root>
								<textarea
										id="message"
										{...register('message', { required: 'Message is required' })}
										placeholder="Your message"
										rows={4}
										style={{ width: '100%', padding: '8px', marginTop: '4px', resize: 'vertical' }}
								/>
								{errors.message && <span style={{ color: 'red' }}>{errors.message.message}</span>}
						</div>
						<button type="submit" class="btn" disabled={isSubmitting}>
								{isSubmitting ? 'Sending...' : 'Send'}
						</button>
				</form>
		);
}