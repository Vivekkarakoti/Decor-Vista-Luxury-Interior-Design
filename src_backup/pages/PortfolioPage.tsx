import PageHeader from '../components/PageHeader';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Our Portfolio"
        description="Explore our curated selection of high-end interior design projects."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
      />
      <Portfolio />
      <CTA />
    </>
  );
}
