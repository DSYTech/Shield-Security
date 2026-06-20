import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebook, link: '#', label: 'Facebook' },
    { icon: FaTwitter, link: '#', label: 'Twitter' },
    { icon: FaLinkedin, link: '#', label: 'LinkedIn' },
    { icon: FaInstagram, link: '#', label: 'Instagram' },
  ];

  const footerSections = [
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Blog'],
    },
    {
      title: 'Services',
      links: [
        'Corporate Security',
        'Industrial Security',
        'Event Security',
        'CCTV Monitoring',
      ],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Contact', 'FAQ'],
    },
  ];

  return (
    <footer className="bg-dark border-t border-charcoal">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="footer-grid mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-dark font-bold text-lg">SS</span>
              </div>
              <span className="text-white font-bold text-lg">Sentinel Shield</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Protecting what matters most with advanced security solutions and
              professional expertise.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="text-gray-400 hover:text-gold smooth-transition text-xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  title={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              className="footer-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
            >
              <h4 className="text-white font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2 footer-list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      className="footer-link smooth-transition text-sm"
                      type="button"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-charcoal my-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} Sentinel Shield Security. All rights reserved.
          </p>
          <p className="mt-4 md:mt-0">
            Built with <span className="text-gold">♥</span> for security excellence
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
