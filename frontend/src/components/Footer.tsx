import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' }
    ],
    products: [
      { label: 'Flexible Savings', href: '#services' },
      { label: 'Fixed Savings', href: '#services' },
      { label: 'Auto-Save', href: '#services' },
      { label: 'Target Savings', href: '#services' }
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Security', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Compliance', href: '#' }
    ]
  };

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">MoSave</div>
            <p className="text-gray-400 mb-4">
              Making savings simple and accessible for everyone. Start your journey to financial freedom today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Mail className="text-blue-500 mt-1" size={20} />
              <div>
                <div className="text-white font-semibold mb-1">Email Us</div>
                <a href="mailto:support@mosave.com" className="hover:text-white transition-colors">
                  support@mosave.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="text-blue-500 mt-1" size={20} />
              <div>
                <div className="text-white font-semibold mb-1">Call Us</div>
                <a href="tel:+2348012345678" className="hover:text-white transition-colors">
                  +234 801 234 5678
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="text-blue-500 mt-1" size={20} />
              <div>
                <div className="text-white font-semibold mb-1">Visit Us</div>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} MoSave. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            Regulated by the Central Bank of Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
