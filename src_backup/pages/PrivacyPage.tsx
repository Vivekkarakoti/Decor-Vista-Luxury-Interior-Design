import { motion } from 'motion/react';

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 tracking-tight">Privacy Policy</h1>
        <p className="text-text-muted mb-12">Last Updated: March 7, 2026</p>

        <div className="space-y-12 text-text-primary/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">1. Introduction</h2>
            <p>At Decor Vista, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our interior design and renovation services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">2. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services. This may include:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Name and Contact Data (email address, phone number, physical address)</li>
              <li>Property details and design preferences</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Communication records between you and our team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">3. How We Use Information</h2>
            <p>We use the personal information collected via our website for a variety of business purposes described below:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To provide and manage our interior design services</li>
              <li>To send administrative information, such as contract updates or project milestones</li>
              <li>To respond to your inquiries and offer customer support</li>
              <li>To send you marketing and promotional communications (you can opt-out at any time)</li>
              <li>To improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">4. Cookies and Tracking Technologies</h2>
            <p>We may use cookies, web beacons, tracking pixels, and other tracking technologies on the website to help customize the website and improve your experience. You can choose to disable cookies through your browser settings, though this may affect your ability to use certain features of the website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">5. Data Protection</h2>
            <p>We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Transmission of personal information to and from our website is at your own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">6. Third-Party Services</h2>
            <p>We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf. This includes payment processors, email delivery services, hosting services, and customer service tools. We only share the information necessary for them to perform their specific services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">7. User Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request that we correct or update your personal information</li>
              <li>The right to request that we delete your personal information</li>
              <li>The right to opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">8. Policy Updates</h2>
            <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-text-primary mb-4">9. Contact Information</h2>
            <p>If you have questions or comments about this policy, you may email us at:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Email: privacy@decorvista.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Design Avenue, Creative District, NY 10001</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
