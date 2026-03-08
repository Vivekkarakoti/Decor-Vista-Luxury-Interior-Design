import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
                  className="relative overflow-hidden rounded-2xl group h-[400px] shadow-lg shadow-glass-shadow"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x600?text=Image+Not+Found';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/80 transition-all duration-500 backdrop-blur-[2px] group-hover:backdrop-blur-md"></div>

                  <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center">
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-12 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center mb-6 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-500">
                        <Icon className="w-8 h-8 text-white group-hover:text-accent transition-colors duration-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white transition-colors duration-500 group-hover:text-accent">
                        {service.title}
                      </h4>
                    </div>

                    <div className="absolute bottom-12 left-8 right-8 opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 flex flex-col items-center">
                      <p className="text-white/80 text-sm leading-relaxed line-clamp-3 mb-6">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center text-accent font-medium text-sm tracking-widest uppercase">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
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
