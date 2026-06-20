import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBuilding,
  FaCogs,
  FaHotel,
  FaHome,
  FaTicketAlt,
  FaStore,
} from 'react-icons/fa';

const Industries = () => {
  const industries = [
    {
      icon: FaBuilding,
      title: 'Corporate Offices',
      desc: 'Professional security for office buildings and corporate headquarters.',
    },
    {
      icon: FaCogs,
      title: 'Factories & Warehouses',
      desc: 'Industrial security solutions for manufacturing and storage facilities.',
    },
    {
      icon: FaHotel,
      title: 'Hotels & Resorts',
      desc: 'Guest and property protection for hospitality businesses.',
    },
    {
      icon: FaHome,
      title: 'Residential Societies',
      desc: 'Community security for residential complexes and gated communities.',
    },
    {
      icon: FaTicketAlt,
      title: 'Events & Venues',
      desc: 'Security management for concerts, conferences, and large gatherings.',
    },
    {
      icon: FaStore,
      title: 'Retail & Shopping',
      desc: 'Loss prevention and customer safety for retail establishments.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries We <span className="text-gold-gradient">Serve</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Expertise across diverse sectors with tailored security solutions.
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
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-400 rounded-lg opacity-0 group-hover:opacity-10 smooth-transition blur-xl" />

              <div className="relative service-card p-8 rounded-lg border border-charcoal group-hover:border-gold smooth-transition card-hover">
                <motion.div
                  className="text-5xl text-gold mb-4 group-hover:text-yellow-400 smooth-transition"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  transition={{ duration: 0.12 }}
                >
                  <industry.icon />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold smooth-transition">
                  {industry.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">{industry.desc}</p>

                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-gold to-transparent rounded-full w-0 group-hover:w-full smooth-transition"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
