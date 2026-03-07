import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import CTA from '../components/CTA';

export default function ServiceDetailsPage() {
  const { serviceSlug } = useParams();
  const service = servicesData.find((s) => s.id === serviceSlug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary pt-24">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Service Not Found</h1>
        <p className="text-text-muted mb-8">The service you are looking for does not exist.</p>
        <Link to="/services" className="px-6 py-3 bg-accent text-primary rounded-full hover:bg-accent-hover transition-colors">
          Back to Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-accent/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-accent/30">
              <Icon className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-6">Why Choose Our {service.title}?</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              At Decor Vista, we believe that every space should reflect the personality and lifestyle of its inhabitants. Our {service.title.toLowerCase()} are crafted with meticulous attention to detail, combining premium materials with innovative design concepts to create spaces that are both beautiful and highly functional.
            </p>
            
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-text-primary font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <img src={service.gallery[0]} alt="Gallery 1" className="w-full h-64 object-cover rounded-2xl shadow-lg shadow-glass-shadow" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src={service.gallery[1]} alt="Gallery 2" className="w-full h-48 object-cover rounded-2xl shadow-lg shadow-glass-shadow" referrerPolicy="no-referrer" />
              <img src={service.gallery[2]} alt="Gallery 3" className="w-full h-48 object-cover rounded-2xl shadow-lg shadow-glass-shadow" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12">
        <Link to="/services" className="inline-flex items-center space-x-2 text-accent hover:text-accent-hover transition-colors font-medium">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to All Services</span>
        </Link>
      </div>

      <CTA />
    </div>
  );
}
