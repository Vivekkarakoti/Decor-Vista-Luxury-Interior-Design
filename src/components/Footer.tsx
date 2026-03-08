import { Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

export default function Footer() {
  return (
    <footer className="bg-secondary pt-24 pb-12 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-xl font-bold tracking-tighter text-text-primary block">
              DECOR<span className="text-accent">VISTA</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              End-to-end interior design and renovation solutions crafted with emotion, elegance, and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-card rounded-full flex items-center justify-center border border-glass-border hover:border-accent/50 hover:text-accent transition-all duration-300 shadow-lg shadow-glass-shadow">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card rounded-full flex items-center justify-center border border-glass-border hover:border-accent/50 hover:text-accent transition-all duration-300 shadow-lg shadow-glass-shadow">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card rounded-full flex items-center justify-center border border-glass-border hover:border-accent/50 hover:text-accent transition-all duration-300 shadow-lg shadow-glass-shadow">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-card rounded-full flex items-center justify-center border border-glass-border hover:border-accent/50 hover:text-accent transition-all duration-300 shadow-lg shadow-glass-shadow">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="text-text-muted hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-text-muted hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-text-muted hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/services" className="text-text-muted hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="text-text-muted hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-text-primary mb-6">Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-text-muted hover:text-accent transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-text-primary mb-6">Newsletter</h4>
            <p className="text-text-muted text-sm mb-4">Subscribe to get the latest design trends and updates.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-primary border border-glass-border-hover rounded-l-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                required
              />
              <button
                type="submit"
                className="bg-accent text-primary px-4 py-3 rounded-r-xl hover:bg-accent-hover transition-colors flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Decor Vista. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-text-muted hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-text-muted hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
