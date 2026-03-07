import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Let's discuss your vision and create a space that truly reflects your lifestyle."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
      />
      <Contact />
    </>
  );
}
