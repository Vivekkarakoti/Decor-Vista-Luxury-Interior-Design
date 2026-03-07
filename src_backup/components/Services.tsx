import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

interface ServicesProps {
  limit?: number;
}

export default function Services({ limit }: ServicesProps) {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Bespoke Interior Services</h3>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            We offer comprehensive design solutions tailored to your unique taste and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link to={`/services/${service.id}`} key={service.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
                  className="bg-card p-8 rounded-2xl border border-glass-border hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 group h-full flex flex-col"
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3">{service.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed flex-grow">{service.description}</p>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {limit && (
          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary font-semibold rounded-full hover:bg-accent-hover transition-colors"
            >
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
