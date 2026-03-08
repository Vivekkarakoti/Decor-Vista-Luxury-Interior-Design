import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Let's Build Your Dream Space</h3>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            Fill out the form below or contact us directly to schedule your free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card p-10 rounded-3xl border border-glass-border shadow-2xl shadow-glass-shadow"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold tracking-widest text-text-muted uppercase mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-0 border-b border-glass-border-hover px-0 py-3 text-text-primary focus:outline-none focus:border-accent focus:ring-0 transition-all placeholder-text-muted/30"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold tracking-widest text-text-muted uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-0 border-b border-glass-border-hover px-0 py-3 text-text-primary focus:outline-none focus:border-accent focus:ring-0 transition-all placeholder-text-muted/30"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-bold tracking-widest text-text-muted uppercase mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-transparent border-0 border-b border-glass-border-hover px-0 py-3 text-text-primary focus:outline-none focus:border-accent focus:ring-0 transition-all placeholder-text-muted/30"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold tracking-widest text-text-muted uppercase mb-2">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-glass-border-hover px-0 py-3 text-text-primary focus:outline-none focus:border-accent focus:ring-0 transition-all resize-none placeholder-text-muted/30"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 mt-4 bg-accent text-primary font-bold rounded-xl hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(212,212,193,0.3)] transition-all duration-300 flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center flex-shrink-0 border border-glass-border shadow-lg shadow-glass-shadow">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Our Studio</h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    123 Luxury Avenue, Suite 400<br />
                    Design District, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center flex-shrink-0 border border-glass-border shadow-lg shadow-glass-shadow">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Call Us</h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    +1 (555) 123-4567<br />
                    Mon-Fri, 9am - 6pm
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-card rounded-full flex items-center justify-center flex-shrink-0 border border-glass-border shadow-lg shadow-glass-shadow">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">Email Us</h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    hello@decorvista.com<br />
                    support@decorvista.com
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full h-64 bg-card rounded-3xl border border-glass-border overflow-hidden relative shadow-2xl shadow-glass-shadow">
              {/* Google Maps Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                <p className="text-text-muted font-medium flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Google Maps Integration
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
