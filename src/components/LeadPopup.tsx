import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

export default function LeadPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const hasSeenPopup = sessionStorage.getItem('leadPopupDismissed');

        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 3000); // 3 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('leadPopupDismissed', 'true');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/5 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-card border border-glass-border p-8 rounded-3xl shadow-2xl shadow-glass-shadow overflow-hidden"
                    >
                        {/* Background Accents */}
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 text-text-muted hover:text-accent bg-primary/50 hover:bg-primary rounded-full transition-all z-20"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="relative z-10">
                            <div className="text-center mb-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                                    Let's Build Your Dream Space
                                </h3>
                                <p className="text-text-muted">
                                    Get a free consultation from our expert interior designers!
                                </p>
                            </div>

                            {/* Added target="_blank" so the form submission doesn't navigate the user away in the same tab, but you can change it if you prefer redirection inline. */}
                            <form action="https://formly.email/submit" method="POST" className="space-y-4" onSubmit={() => {
                                setTimeout(() => handleClose(), 1000); // Close popup shortly after submitting
                            }}>
                                <input type="hidden" name="access_key" value="5b8dc74442cf45c29dd5db8d7438a72f" />

                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your Name"
                                        className="w-full bg-primary/50 border border-glass-border-hover px-4 py-3 rounded-xl text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-text-muted/50"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Email Address"
                                        className="w-full bg-primary/50 border border-glass-border-hover px-4 py-3 rounded-xl text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-text-muted/50"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        name="message"
                                        required
                                        rows={3}
                                        placeholder="Tell us about your project..."
                                        className="w-full bg-primary/50 border border-glass-border-hover px-4 py-3 rounded-xl text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder-text-muted/50"
                                    ></textarea>
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(212,212,193,0.3)] transition-all duration-300 flex items-center justify-center group"
                                    >
                                        Submit Request
                                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
