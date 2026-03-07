import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Services limit={8} />
      <Portfolio />
      <About />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
