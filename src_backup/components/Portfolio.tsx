import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Luxury Living Room',
    category: 'Living Space',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
  },
  {
    title: 'Modern Modular Kitchen',
    category: 'Kitchen Design',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Minimalist Bedroom',
    category: 'Bedroom Interior',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2680&auto=format&fit=crop',
  },
  {
    title: 'Walk-in Wardrobe',
    category: 'Wardrobe Design',
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=2574&auto=format&fit=crop',
  },
  {
    title: 'Corporate Office',
    category: 'Office Interior',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop',
  },
  {
    title: 'Villa Renovation',
    category: 'Home Renovation',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-4">Featured Projects</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Our Masterpieces</h3>
            <p className="text-text-muted text-base">
              Explore our curated selection of high-end interior design projects, showcasing our commitment to luxury, functionality, and detail.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="hidden md:inline-flex items-center text-accent font-semibold hover:text-accent-hover transition-colors group"
          >
            View All Projects
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-2">{project.category}</p>
                <h4 className="text-xl font-bold text-text-primary">{project.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
