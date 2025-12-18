import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Contact from ${formData.name}`,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again later.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <SectionHeading title="Get In Touch" subtitle="Have a project in mind or want to discuss a potential collaboration?" />

                <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-2xl border border-slate-800">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-slate-400 mb-2 text-sm">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'loading'}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-slate-400 mb-2 text-sm">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === 'loading'}
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-slate-400 mb-2 text-sm">Message</label>
                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        {status === 'success' && (
                            <div className="bg-primary/10 border border-primary/50 text-primary px-4 py-3 rounded-lg">
                                ✓ Message sent successfully! I'll get back to you soon.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
                                ✗ {errorMessage}
                            </div>
                        )}

                        <Button
                            className="w-full"
                            onClick={() => { }}
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </Button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-slate-800 text-center">
                        <p className="text-slate-400 text-sm mb-2">Or reach me directly at:</p>
                        <a href="mailto:syedarqum1999@gmail.com" className="text-primary hover:underline">
                            syedarqum1999@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
