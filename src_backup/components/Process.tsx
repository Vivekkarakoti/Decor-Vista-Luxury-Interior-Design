import { motion } from 'motion/react';
import { MessageSquare, PenTool, Layers, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Consultation',
    description: 'We discuss your vision, requirements, and budget to understand your unique style.',
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Design Planning',
    description: 'Our experts create 2D layouts and 3D visualizations for your approval.',
    icon: <PenTool className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Material Selection',
    description: 'Choose from our premium range of finishes, textures, and materials.',
    icon: <Layers className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Execution',
    description: 'Our skilled craftsmen bring the design to life with precision and care.',
    icon: <Hammer className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Final Delivery',
    description: 'A thorough quality check before handing over your dream space.',
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">How We Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Our Design Process</h3>
          <p className="text-text-muted max-w-2xl mx-auto text-base">
            A seamless, transparent, and collaborative journey from concept to completion.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
                  <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-glass-border -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div className="bg-card p-6 rounded-2xl border border-glass-border w-full h-full shadow-xl shadow-glass-shadow hover:border-glass-border-hover transition-colors">
                  <span className="text-accent font-mono text-sm font-bold mb-2 block">0{index + 1}</span>
                  <h4 className="text-lg font-semibold text-text-primary mb-3">{step.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
