import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 tracking-tight">Terms and Conditions</h1>
        <p className="text-text-muted mb-12">Last Updated: March 7, 2026</p>

        <div className="space-y-12 text-text-primary/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Introduction</h2>
            <p>Welcome to Decor Vista. These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these terms. If you disagree with any part of these terms, please do not use our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Company Information</h2>
            <p>Decor Vista is a premium interior design and home renovation company specializing in modular kitchens, living room designs, bedroom interiors, and office spaces. Our registered office is located at [Insert Address].</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">3. Use of Website</h2>
            <p>You must be at least 18 years of age to use this website. You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Services Offered</h2>
            <p>We provide end-to-end interior design and renovation solutions. All project timelines, deliverables, and specific service details will be outlined in a separate formal agreement or contract signed before the commencement of any project.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Pricing and Payments</h2>
            <p>Pricing for our services is customized based on the scope of the project. A detailed quotation will be provided after the initial consultation. Payment terms, including deposits and milestone payments, will be specified in the project contract. All prices are subject to change without prior notice until a contract is signed.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, images, and software, is the property of Decor Vista and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any of the material on this website without our explicit written consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">7. User Responsibilities</h2>
            <p>When providing information for a consultation or project, you agree to provide accurate and complete details. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Limitation of Liability</h2>
            <p>Decor Vista shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or our services. Our total liability in any matter related to our services is limited to the amount paid by you for those specific services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">9. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on the website. Your continued use of the website after any changes indicates your acceptance of the modified terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">10. Contact Information</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Email: legal@decorvista.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Design Avenue, Creative District, NY 10001</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
