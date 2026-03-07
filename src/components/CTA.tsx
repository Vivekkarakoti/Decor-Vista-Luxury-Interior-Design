import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2664&auto=format&fit=crop"
          alt="Luxury Interior Background"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Ready to Transform Your Home?
          </h2>
          <p className="text-base md:text-lg text-primary/80 mb-10 max-w-2xl mx-auto font-medium">
            Let's discuss your vision and create a space that truly reflects your lifestyle.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-accent font-bold rounded-full hover:bg-secondary transition-all group text-base"
          >
            Book Your Free Consultation
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
