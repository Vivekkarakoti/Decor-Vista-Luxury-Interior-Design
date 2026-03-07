import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    content: 'Decor Vista transformed our kitchen into a stunning and functional space. Their attention to detail and commitment to quality is unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Apartment Owner',
    content: 'The team was professional, creative, and delivered exactly what we envisioned for our living room. Highly recommended for luxury interiors.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Villa Owner',
    content: 'From the initial consultation to the final handover, the process was seamless. Our master bedroom is now a perfect, relaxing retreat.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Client Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">What Our Clients Say</h3>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            Don't just take our word for it. Read about the experiences of our satisfied clients.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-glass-border flex items-center justify-center text-text-primary hover:text-accent hover:border-accent/50 transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-card border border-glass-border flex items-center justify-center text-text-primary hover:text-accent hover:border-accent/50 transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-card p-10 md:p-16 rounded-3xl border border-glass-border relative group shadow-2xl shadow-glass-shadow text-center"
              >
                <Quote className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 text-glass-border/50" />
                
                <div className="flex justify-center space-x-1 mb-8 relative z-10 mt-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-text-primary text-xl md:text-2xl leading-relaxed mb-10 italic font-serif relative z-10">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-text-primary">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-accent font-medium tracking-widest uppercase mt-1">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent w-8' : 'bg-glass-border-hover hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
