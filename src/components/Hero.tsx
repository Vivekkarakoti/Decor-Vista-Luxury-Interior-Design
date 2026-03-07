import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury Interior Design"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/80 to-primary"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-tight mb-6">
            Transform Your Space with <br className="hidden md:block" />
            <span className="text-accent italic font-serif font-normal">Elegant Interior Design</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted mb-10 max-w-2xl mx-auto font-light leading-loose">
            End-to-end modular kitchen and interior design solutions crafted with precision and creativity. Because every home deserves a soul.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-primary font-semibold rounded-full hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(212,212,193,0.3)] transition-all duration-300 flex items-center justify-center group"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-glass-border-hover text-text-primary font-semibold rounded-full hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
