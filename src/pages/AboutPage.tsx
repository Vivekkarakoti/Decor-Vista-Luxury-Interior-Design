import PageHeader from '../components/PageHeader';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Decor Vista"
        description="Crafting spaces that reflect your personality and elevate everyday living."
        image="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2680&auto=format&fit=crop"
      />
      <About />
      <Testimonials />
      <CTA />
    </>
  );
}