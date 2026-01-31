import Navbar from '@/components/navbar';

export const metadata = {
  title: 'Data Safety - Riptide Jet Ski Rental',
  description: 'Data Safety Information for Riptide Jet Ski Rental',
};

export default function DataSafety() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Content with top padding for fixed navbar */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Data Safety</h1>
          <p className="text-gray-600 mb-8">Last Updated: January 31, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Protection Standards</h2>
              <p>
                <strong>Riptide Jet Ski Rental</strong> implements industry-leading data safety practices to ensure your personal information is protected at all times. We comply with all relevant data protection regulations and standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Data Encryption</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All data transmitted over the internet is encrypted using SSL/TLS protocols</li>
                <li>Sensitive information is encrypted both in transit and at rest</li>
                <li>Advanced encryption standards (AES-256) for stored data</li>
                <li>Regular encryption key rotation and management</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Access Control</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Role-based access control for all employees</li>
                <li>Multi-factor authentication for sensitive systems</li>
                <li>Limited access to personal information on need-to-know basis</li>
                <li>Regular access audits and reviews</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Backup and Recovery</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Automated daily backups of all customer data</li>
                <li>Geographically distributed backup locations</li>
                <li>Regular disaster recovery drills and testing</li>
                <li>Secure backup storage with encryption</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Third-Party Data Handling</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Strict data processing agreements with all third parties</li>
                <li>Regular audits of third-party service providers</li>
                <li>Confidentiality agreements with all staff and partners</li>
                <li>No sharing of personal data without explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal data is retained only as long as necessary</li>
                <li>Secure deletion of data when no longer needed</li>
                <li>Clear retention schedules for all data types</li>
                <li>Compliant disposal of physical records</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Breach Notification</h2>
              <p>
                In the unlikely event of a data breach, we are committed to notifying affected individuals and relevant authorities within legal timeframes. We will provide guidance on steps you can take to protect yourself.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Compliance and Audits</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Regular security audits by independent third parties</li>
                <li>Compliance with GDPR, CCPA, and other data protection laws</li>
                <li>PCI-DSS certification for payment data handling</li>
                <li>Annual penetration testing and vulnerability assessments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>For data safety concerns or to exercise your rights:</p>
              <div className="bg-gray-100 p-6 rounded-lg mt-4">
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
