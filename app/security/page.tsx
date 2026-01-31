import Navbar from '@/components/navbar';

export const metadata = {
  title: 'Security Policy - Riptide Jet Ski Rental',
  description: 'Security Policy for Riptide Jet Ski Rental',
};

export default function SecurityPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Content with top padding for fixed navbar */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Security Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: January 31, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Commitment to Security</h2>
              <p>
                At <strong>Riptide Jet Ski Rental</strong>, your security and the security of our equipment and facilities is our highest priority. We maintain comprehensive security measures to protect our customers, staff, and assets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Equipment Security</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All jet skis are equipped with GPS tracking and anti-theft devices</li>
                <li>Regular maintenance and safety inspections are conducted on all equipment</li>
                <li>Secure storage facilities with 24/7 monitoring</li>
                <li>Serial number tracking and inventory management system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Facility Security</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Surveillance cameras covering all rental areas</li>
                <li>Controlled access points with authentication systems</li>
                <li>Secure lock systems on equipment storage areas</li>
                <li>Regular security patrols and monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Cyber Security</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SSL encryption for all website transactions</li>
                <li>Secure payment processing through PCI-DSS compliant providers</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Firewalls and intrusion detection systems</li>
                <li>Regular software updates and security patches</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Customer Safety</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Life jacket and safety equipment provided with every rental</li>
                <li>Mandatory safety briefing before each rental</li>
                <li>Licensed and trained staff members</li>
                <li>Emergency response protocols and first aid trained personnel</li>
                <li>Weather monitoring and ride cancellation policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Incident Reporting</h2>
              <p>
                Any security incidents, accidents, or concerns should be reported immediately to our staff. We maintain detailed incident reports and conduct thorough investigations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p>For security concerns or questions:</p>
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
