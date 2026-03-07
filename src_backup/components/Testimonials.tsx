import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

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
  return (
    <section id="testimonials" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Client Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">What Our Clients Say</h3>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            Don't just take our word for it. Read about the experiences of our satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card p-8 rounded-2xl border border-glass-border relative group hover:border-accent/40 transition-all duration-500 shadow-2xl shadow-glass-shadow hover:shadow-accent/5"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-glass-border group-hover:text-accent/20 transition-colors" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-text-muted text-base leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              
              <div>
                <h4 className="text-base font-bold text-text-primary">{testimonial.name}</h4>
                <p className="text-xs text-accent font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
