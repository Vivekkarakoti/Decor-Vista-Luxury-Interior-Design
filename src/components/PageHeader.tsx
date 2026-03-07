import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  description: string;
  image: string;
}

export default function PageHeader({ title, description, image }: PageHeaderProps) {
  return (
    <section className="relative pt-40 pb-24 flex items-center justify-center overflow-hidden min-h-[50vh]">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 font-serif tracking-tight">{title}</h1>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto font-light leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
