import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaCogs,
  FaVideo,
  FaShieldAlt,
  FaUserTie,
  FaClipboardList,
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaBriefcase,
      title: 'Corporate Security',
      desc: 'Comprehensive protection for office buildings, headquarters, and commercial establishments.',
    },
    {
      icon: FaCogs,
      title: 'Industrial Security',
      desc: 'Advanced security solutions for factories, warehouses, and manufacturing facilities.',
    },
    {
      icon: FaShieldAlt,
      title: 'Event Security',
      desc: 'Professional event management and crowd control for conferences, concerts, and gatherings.',
    },
    {
      icon: FaVideo,
      title: 'CCTV Monitoring',
      desc: '24/7 surveillance and monitoring with state-of-the-art technology and expert staff.',
    },
    {
      icon: FaUserTie,
      title: 'Personal Protection',
      desc: 'Executive and VIP protection with highly trained personnel and advanced techniques.',
    },
    {
      icon: FaClipboardList,
      title: 'Security Consulting',
      desc: 'Expert consultation for risk assessment and customized security planning.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Comprehensive security solutions tailored to meet your unique needs and
            challenges.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-yellow-400 mx-auto" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative service-card p-8 rounded-lg card-tilt border border-charcoal hover:border-gold group overflow-hidden"
              whileHover={{ scale: 1.02, rotate: 0.6 }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold opacity-0 smooth-transition rounded-lg" />

              <div className="relative z-10">
                <motion.div
                  className="text-5xl text-gold mb-4 group-hover:text-yellow-400 smooth-transition"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ duration: 0.08 }}
                >
                  <service.icon />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold smooth-transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">{service.desc}</p>

                <motion.button
                  className="mt-6 text-gold font-semibold flex items-center gap-2 group-hover:gap-3 smooth-transition"
                  whileHover={{ x: 5 }}
                >
                  Learn More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
