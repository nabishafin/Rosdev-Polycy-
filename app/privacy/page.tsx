import Navbar from '@/components/navbar';

export const metadata = {
  title: 'Privacy Policy - Riptide Jet Ski Rental',
  description: 'Privacy Policy for Riptide Jet Ski Rental',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Content with top padding for fixed navbar */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: January 31, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Introduction</h2>
              <p>
                This Privacy Policy describes how <strong>Riptide Jet Ski Rental</strong> ("we", "our", or "us") handles and protects information when you visit our website or use our services.
              </p>
              <p>
                We respect your privacy and are committed to protecting your personal information. Please read this Privacy Policy carefully to understand our practices regarding your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Booking and rental details (dates, jet ski selection, rental duration)</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent on site, links clicked)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process and fulfill your jet ski rental reservations</li>
                <li>Send you confirmation emails and booking updates</li>
                <li>Respond to your inquiries and customer service requests</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and ensure the safety of our customers and equipment</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure. We cannot guarantee absolute security of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Third-Party Services</h2>
              <p>
                We may use third-party service providers to process payments, send emails, and analyze website usage. These providers are contractually obligated to keep your information confidential and secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cookies and Tracking</h2>
              <p>
                Our website may use cookies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences and improve our services. You can disable cookies in your browser settings if you prefer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Children's Privacy</h2>
              <p>
                Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of our website or services constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-100 p-6 rounded-lg mt-4">
                <p className="mb-2">
                  <strong>Riptide Jet Ski Rental</strong>
                </p>
                <p className="mb-1">
                  📧 Email:{' '}
                  <a href="mailto:RiptideRentalsFL@gmail.com" className="text-blue-600 hover:underline">
                    RiptideRentalsFL@gmail.com
                  </a>
                </p>
              </div>
            </section>

            <div className="border-t border-gray-300 mt-12 pt-8 text-gray-600 text-sm">
              <p>© 2026 Riptide Jet Ski Rental. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
