import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  'Award-winning interior designers',
  'Premium quality materials',
  'Transparent pricing & process',
  'On-time project delivery',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop"
              alt="About Decor Vista"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-card/90 backdrop-blur-md p-8 rounded-2xl border border-glass-border shadow-2xl shadow-glass-shadow-strong hidden md:block">
            <p className="text-4xl font-bold text-accent mb-2">15+</p>
            <p className="text-text-muted font-medium">Years of Excellence</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">About Decor Vista</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 leading-tight">
            Crafting Spaces That Reflect Your Personality
          </h3>
          <p className="text-text-muted text-base mb-8 leading-relaxed">
            At Decor Vista, we believe that every home deserves a soul. Our mission is to transform ordinary spaces into extraordinary living experiences through innovative design, meticulous planning, and flawless execution.
          </p>
          <p className="text-text-muted text-base mb-10 leading-relaxed">
            From modular kitchens to complete home renovations, our team of expert designers and craftsmen work passionately to bring your vision to life, ensuring a perfect blend of aesthetics and functionality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="text-accent w-6 h-6 flex-shrink-0" />
                <span className="text-text-primary font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-semibold rounded-full hover:bg-accent-hover transition-all"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
