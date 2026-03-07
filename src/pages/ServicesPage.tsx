import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive interior design and renovation solutions tailored to your lifestyle."
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop"
      />
      <Services />
      <Process />
      <CTA />
    </>
  );
}
